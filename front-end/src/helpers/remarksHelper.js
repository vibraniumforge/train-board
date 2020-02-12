const remarksHelper = remark => {
  const trimmedRemark = remark.trim();
  if (trimmedRemark.indexOf("E") > -1) {
    return "green";
  }
  switch (trimmedRemark) {
    case "S. Disrupt":
      return "Service Disrupt";
    default:
      return trimmedRemark;
  }
};

export { remarksHelper };
