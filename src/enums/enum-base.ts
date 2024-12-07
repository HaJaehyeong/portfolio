export class EnumDef {
  name: string;
  code: string;

  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }
}

export type SortableEnumDef = EnumDef & { sortNo: number };

export abstract class EnumBase<T extends EnumDef> {
  abstract values: T[];

  valueOf(code: string): T | undefined {
    return this.values.find((e) => e.code === code);
  }
}
