export const resolveHostPath = (path: string): string => {
  const host = process.env.HOST;
  const port = process.env.PORT;
  if (port === undefined) {
    throw new Error('PORT環境変数が定義されていません');
  }

  return `http://${host || 'localhost'}:${process.env.PORT}${path}`;
};

