function validateString(args) {
  if (args.find((r) => r.trim().length === 0) !== undefined) {
    return true;
  }

  return false;
}

export { validateString };
