# OData(V4) URI Parser

[![npm (scoped)](https://img.shields.io/npm/v/@odata/parser)](https://www.npmjs.com/package/@odata/parser)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Soontao/odata-v4-parser/Node%20CI?label=nodejs)](https://github.com/Soontao/odata-v4-parser/actions?query=workflow%3A%Node+CI%22)
[![Codecov](https://codecov.io/gh/Soontao/odata-v4-parser/branch/master/graph/badge.svg)](https://codecov.io/gh/Soontao/odata-v4-parser)


OData v4 parser based on OASIS Standard OData v4 ABNF grammar

## Usage - URI Parser

```ts
import { defaultParser } from "@odata/parser";
const ast = defaultParser.odataUri("/Categories(10)?$expand=A,C&$select=D,E")
// process it
```

## Usage - OData QueryParam/Filter Builder

```ts
import { param, filter } from "@odata/parser";
param().top(1).filter(filter({ A: 1 }))
// => $top=1&$filter=A eq 1
```

### filter with type

```ts
import { filter, literalValues } from "@odata/parser";

expect(filter({ A: 1 }).build())
    .toBe("A eq 1")
expect(filter({ A: literalValues.String(1) }).build())
    .toBe("A eq '1'")
expect(filter({ A: literalValues.Guid("253f842d-d739-41b8-ac8c-139ac7a9dd14") }).build())
    .toBe("A eq 253f842d-d739-41b8-ac8c-139ac7a9dd14")

```


## [CHANGELOG](./CHANGELOG.md)

## [LICENSE](./LICENSE)
