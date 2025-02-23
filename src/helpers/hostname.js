const getSubdomain = () => {
  const host = window.location.hostname;
  const parts = host.split(".");
  return parts.length > 2 ? parts[0] : "mosque-1";
};

export default getSubdomain;
