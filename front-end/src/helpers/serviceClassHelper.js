const serviceClassHelper = service => {
  switch (service) {
    // long distance
    case "Sunset Ltd.":
      return "default-amtrak-long-distance";
    case "SW Chief":
      return "default-amtrak-long-distance";
    case "California Zephyr":
      return "default-amtrak-long-distance";
    case "Empire Bldr.":
      return "default-amtrak-long-distance";
    case "EB Portland":
      return "default-amtrak-long-distance";
    case "Coast Star" || "Coast Starlight":
      return "default-amtrak-long-distance";
    case "Crescent":
      return "Crescent";
    case "Texas Eagle":
      return "Texas Eagle";
    case "Capitol Ltd.":
      return "Capitol Ltd";
    case "Pennsylvan.":
      return "Pennsylvanian";
    case "Lake S. Ltd.":
      return "Lake Shore";
    case "LSL Boston":
      return "LSL - Boston";
    case "Cardinal":
      return "Cardinal";
    case "Auto Train":
      return "Auto Train";
    case "Vermonter":
      return "Vermonter";
    case "City of N O":
      return "City of New Orleans";
    case "Maple Leaf":
      return "maple-leaf";
    case "Adirondak":
      return "Adirondak";
    case "Piedmont":
      return "Piedmont";
    case "Carolinian":
      return "Carolinian";
    case "Palmetto":
      return "palmetto";
    case "Sil. Star":
      return "silver-services";
    case "Sil. Meteor":
      return "silver-services";

    // corridors west
    case "PAC SURFLNR":
      return "pacific-surfliner";
    case "C. Corridor":
      return "capitol-corridor";
    case "San Joaquin":
      return "san-joaquin";
    case "Cascades":
      return "cascades";

    // corridors Midwest
    case "Riv. Runner":
      return "river-runner";
    case "Lincoln S.":
      return "lincoln-service";
    case "C. Sandburg":
      return "Carl Sandburg";
    // case "Pere Marq.":
    //   return "Pere Marquette";
    // case "Hoosier St.":
    //   return "Hoosier State";
    // case "Ill. Zephyr":
    //   return "Illinois Zephyr";

    // NE corridors
    case "Acela Expr.":
      return "acela-express";
    case "NE Regional":
      return "default-amtrak-long-distance";
    case "Keystone":
      return "keystone";
    case "Empire Serv.":
      return "Empire Svc.";

    // international
    case "Eurostar":
      return "eurostar";
    case "Thalys":
      return "thalys";
    case "Railjet":
      return "railjet";
    case "TGV":
      return "tgv";
    default:
      return "";
  }
};

export { serviceClassHelper };
