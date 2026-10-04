import { parse } from "yaml";
import { CaseSchema, type Case } from "./schema.ts";

export class CaseValidationError extends Error {
  readonly issues: string[];

  constructor(source: string, issues: string[]) {
    super(`Invalid case file ${source}:\n  ${issues.join("\n  ")}`);
    this.name = "CaseValidationError";
    this.issues = issues;
  }
}

/**
 * Parse and validate a case from YAML text. Pure: no file or network access,
 * so it runs identically in tests, the browser and a desktop shell.
 */
export function parseCase(yamlText: string, source = "<inline>"): Case {
  let raw: unknown;
  try {
    raw = parse(yamlText);
  } catch (err) {
    throw new CaseValidationError(source, [`YAML syntax: ${(err as Error).message}`]);
  }

  const result = CaseSchema.safeParse(raw);
  if (!result.success) {
    const issues = result.error.issues.map(
      (issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`,
    );
    throw new CaseValidationError(source, issues);
  }
  return result.data;
}
