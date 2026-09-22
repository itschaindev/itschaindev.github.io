// Build-time values
export default () => ({
  year: new Date().getUTCFullYear(),
  date: new Date().toISOString(),
});
