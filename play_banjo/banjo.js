function areYouPlayingBanjo(name) {
  let str = name.charAt(0)=="R"||name.charAt(0)=="r"?"plays banjo":"does not play banjo"
  return `${name} ${str}`;
}
