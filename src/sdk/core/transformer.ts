import { TransformOptions } from './types';

export class TMFTransformer {
  static transform<T>(data: T, options: TransformOptions): any {
    let result = data;

    if (options.pick) {
      result = this.pickFields(result, options.pick);
    }

    if (options.omit) {
      result = this.omitFields(result, options.omit);
    }

    if (options.rename) {
      result = this.renameFields(result, options.rename);
    }

    return result;
  }

  private static pickFields(data: any, fields: string[]): any {
    const result: any = {};

    fields.forEach(field => {
      const value = this.getNestedValue(data, field);
      if (value !== undefined) {
        this.setNestedValue(result, field, value);
      }
    });

    return result;
  }

  private static omitFields(data: any, fields: string[]): any {
    const result = { ...data };

    fields.forEach(field => {
      this.deleteNestedValue(result, field);
    });

    return result;
  }

  private static renameFields(data: any, mapping: Record<string, string>): any {
    const result = { ...data };

    Object.entries(mapping).forEach(([oldKey, newKey]) => {
      const value = this.getNestedValue(result, oldKey);
      if (value !== undefined) {
        this.deleteNestedValue(result, oldKey);
        this.setNestedValue(result, newKey, value);
      }
    });

    return result;
  }

  private static getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  private static setNestedValue(obj: any, path: string, value: any): void {
    const keys = path.split('.');
    const lastKey = keys.pop()!;
    const target = keys.reduce((current, key) => {
      if (!current[key]) current[key] = {};
      return current[key];
    }, obj);
    target[lastKey] = value;
  }

  private static deleteNestedValue(obj: any, path: string): void {
    const keys = path.split('.');
    const lastKey = keys.pop()!;
    const target = keys.reduce((current, key) => current?.[key], obj);
    if (target) delete target[lastKey];
  }
}
