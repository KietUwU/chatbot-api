import { Edm } from '../edm';

export class JsonDocument {

  public metadata: Edm.Edmx
  private options: any

  constructor(options: any, edmx: Edm.Edmx) {
    options = options || {};

    this.options = Object.assign({}, options);

    this.metadata = edmx;
  }


  processMetadata() {
    const context = {};
    const json = {
      '@odata.context': this.options.context,
      value: []
    };
    this.buildEdmx(json, this.metadata, context);
    return json;
  }

  buildEdmx(json, edmx, context) {
    this.buildDataServices(json, edmx.dataServices, context);
  }

  buildDataServices(json, dataservices, context) {
    this.buildSchema(json, dataservices.schemas, context);
  }

  buildSchema(json, schemas, context) {
    schemas && schemas.forEach((schema) => {
      this.buildEntityContainer(json, schema.entityContainer, context);
    });
  }

  buildEntityContainer(json, entityContainers, context) {
    entityContainers && entityContainers.forEach((entityContainer) => {
      this.buildEntitySets(json, entityContainer.entitySets, context);
    });
  }

  buildEntitySets(json, entitySets, context) {
    entitySets && entitySets.forEach((entitySet) => {
      json.value.push({
        name: entitySet.name,
        kind: 'EntitySet',
        url: entitySet.name
      });
    });
  }

}
