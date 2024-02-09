export function isTransactionHash(hash: string | undefined): hash is string {
  if (!hash) return false;
  return /^0x([A-Fa-f0-9]{64})$/.test(hash);
}
