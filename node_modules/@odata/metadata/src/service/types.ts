export interface MetadataInJson {
  dataServices?: DataServices;
  references?: any[];
  version?: string;
}

export interface DataServices {
  schemas?: Schema[];
}

export interface Schema {
  namespace?: string;
  enumTypes?: any[];
  typeDefinitions?: any[];
  complexTypes?: ComplexType[];
  entityTypes?: EntityType[];
  actions?: Action[];
  functions?: Function[];
  entityContainer?: EntityContainer[];
  annotations?: any[];
}

export interface Action {
  name?: string;
  isBound?: boolean;
  parameters?: Parameter[];
  returnType?: ActionReturnType;
  annotations?: any[];
}

export interface Parameter {
  name?: string;
  type?: string;
  annotations?: Annotation[];
  referentialConstraints?: any[];
  nullable?: boolean;
}

export interface Annotation {
  term?: string;
  string?: string;
  annotationType?: string;
}

export interface ActionReturnType {
  annotations?: any[];
}

export interface ComplexType {
  name?: string;
  openType?: boolean;
  hasStream?: boolean;
  properties?: Parameter[];
  navigationProperties?: any[];
  annotations?: any[];
}

export interface EntityContainer {
  name?: string;
  entitySets?: EntitySet[];
  actionImports?: any[];
  functionImports?: any[];
}

export interface EntitySet {
  name?: string;
  entityType?: string;
  annotations?: any[];
}

export interface EntityType {
  name?: string;
  key?: Key;
  openType?: boolean;
  hasStream?: boolean;
  properties?: Parameter[];
  navigationProperties?: Parameter[];
  annotations?: Annotation[];
}

export interface Key {
  propertyRefs?: PropertyRef[];
}

export interface PropertyRef {
  name?: string;
}

export interface Function {
  name?: string;
  isBound?: boolean;
  parameters?: Parameter[];
  returnType?: FunctionReturnType;
  annotations?: any[];
}

export interface FunctionReturnType {
  type?: string;
  annotations?: any[];
}
