import {
  AddressView,
  InfoCols,
  LabeledValue,
  Pagination,
  TableList,
  Tabs,
} from '@app/components/ui/views';
import { useGetAddressQuery } from '@app/store/api/rtk-query';
import { skipToken } from '@reduxjs/toolkit/query';
import { DateTime } from 'luxon';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

export const AddressScreen = () => {
  const { address } = useParams<{ address: string }>();

  const { data: account } = useGetAddressQuery(address ?? skipToken);

  const [offset, setOffset] = useState(0);

  const visibleTransactions = useMemo(
    () => account?.transactions.slice(offset, offset + 10),
    [account, offset],
  );

  if (!account || !visibleTransactions) return null;

  return (
    <>
      <Tabs
        tabs={[
          {
            title: 'Info',
            element: (
              <InfoCols>
                <LabeledValue label="BNB Balance">
                  {account.balance} BNB
                </LabeledValue>
                <LabeledValue label="BNB Balance">
                  {account.balance} BNB
                </LabeledValue>
              </InfoCols>
            ),
          },
          {
            title: 'Total in/out',
            element: <></>,
          },
        ]}
      />
      <Pagination
        currentOffset={offset}
        itemsPerPage={10}
        onChange={setOffset}
        totalItems={account.transactions.length}
      />
      <TableList
        items={visibleTransactions}
        display={['hash', 'timestamp', 'from', 'to', 'value']}
        headings={{
          hash: 'Hash',
          from: 'From',
          to: 'To',
        }}
        keyExtractor={(item) => item.hash}
        transformations={{
          hash: (hash) => <AddressView address={hash} link="transaction" />,
          from: (address) =>
            address ? <AddressView address={address} /> : '-',
          to: (address) => (address ? <AddressView address={address} /> : '-'),
          value: (value) => `${(value * 1e-18).toString()} BNB`,
          timestamp: (timestamp) => {
            const diff = DateTime.now().diff(DateTime.fromSeconds(timestamp), [
              'days',
              'hours',
              'minutes',
              'seconds',
            ]);
            let format = "d 'days' h 'hrs' ago";
            if (diff.days < 1) format = "h 'hrs' m 'min' ago";
            return diff.toFormat(format);
          },
        }}
      />
      <Pagination
        currentOffset={offset}
        itemsPerPage={10}
        onChange={setOffset}
        totalItems={account.transactions.length}
      />
    </>
  );
};
