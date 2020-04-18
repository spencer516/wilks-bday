export default function (server) {
  const firstPage = server.create('page', { isFirstPage: true });

  server.create('page', { previousPage: firstPage });
}
