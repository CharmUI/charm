export function getUpdatedContent(contents, location) {
  return contents.map(content => Object.assign({}, content, {
    isCurrentPath: location.pathname === content.path,
  }));
}

export function getCurrentRoute(contents, location) {
  return contents.reduce((acc, content) => {
    if (content.path === location.pathname) return Object.assign({}, acc, content);
    return acc;
  }, {});
}

export function getCurrentContentIndex(contents, location) {
  return contents.reduce((acc, content, i) => {
    if (content.path === location.pathname) return i;
    return acc;
  }, null);
}
