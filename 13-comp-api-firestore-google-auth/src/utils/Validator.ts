function validateString(args: string[]): boolean {
  if (args.find((r) => r.trim().length === 0) !== undefined) {
    return true;
  }

  return false;
}

export { validateString };
