import { InfoList } from '@app/components/ui/views';
import { useGetTransactionQuery } from '@app/store/api/rtk-query';
import { isTransactionHash } from '@app/utils';
import { skipToken } from '@reduxjs/toolkit/query';
import { useParams } from 'react-router-dom';

export const TransactionScreen = () => {
  const { hash } = useParams<{ hash: string }>();

  const { data: transaction } = useGetTransactionQuery(
    isTransactionHash(hash) ? hash : skipToken,
  );

  if (!transaction) return null;

  return (
    <div>
      <InfoList
        items={[
          [
            {
              title: 'Transaction Hash',
              value: transaction.hash,
            },
            {
              title: 'Block',
              value: transaction.blockNumber,
            },
          ],
          [
            {
              title: 'From',
              value: transaction.from,
            },
            {
              title: 'To',
              value: transaction.to,
            },
          ],
          [
            {
              title: 'Value',
              value: `${transaction.value} BNB`,
            },
            {
              title: 'Transaction Fee',
              value: `${
                (transaction.gasPrice * transaction.receipt.gasUsed) / 10e17
              } BNB`,
            },
            {
              title: 'Gas Price',
              value: `${transaction.gasPrice / 10e8} Gwei`,
            },
          ],
        ]}
      />
    </div>
  );
};
