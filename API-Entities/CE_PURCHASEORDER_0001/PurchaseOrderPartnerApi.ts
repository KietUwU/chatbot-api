/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderPartner } from './PurchaseOrderPartner';
import { PurchaseOrderPartnerRequestBuilder } from './PurchaseOrderPartnerRequestBuilder';
import { PurchaseOrderApi } from './PurchaseOrderApi';
import { Sap_Message } from './Sap_Message';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseOrderPartnerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PurchaseOrderPartner<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): PurchaseOrderPartnerApi<DeSerializersT> {
    return new PurchaseOrderPartnerApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderTp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_TP: OneToOneLink<
      PurchaseOrderPartner<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PurchaseOrderApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_ORDER_TP: new OneToOneLink(
        '_PurchaseOrderTP',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PurchaseOrderPartner;

  requestBuilder(): PurchaseOrderPartnerRequestBuilder<DeSerializersT> {
    return new PurchaseOrderPartnerRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderPartner<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PurchaseOrderPartner<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseOrderPartner<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PurchaseOrderPartner,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderPartner,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCHASE_ORDER: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTNER_FUNCTION: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_SUBRANGE: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_ORGANIZATION: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTNER_COUNTER: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    PURCHASING_DOCUMENT_PARTNER_TYPE: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_HIERARCHY_CATEGORY: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_CONTACT: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSON_WORK_AGREEMENT: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_INTERNAL_ID: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_PARTNER: OrderableEdmTypeField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      PurchaseOrderPartner<DeSerializers>,
      DeSerializersT,
      Sap_Message,
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderTp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_TP: OneToOneLink<
      PurchaseOrderPartner<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseOrderPartner<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partnerFunction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField(
          'PartnerFunction',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplierSubrange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_SUBRANGE: fieldBuilder.buildEdmTypeField(
          'SupplierSubrange',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
        /**
         * Static representation of the {@link purchasingOrganization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField(
          'PurchasingOrganization',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partnerCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_COUNTER: fieldBuilder.buildEdmTypeField(
          'PartnerCounter',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link createdByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'CreatedByUser',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link purchasingDocumentPartnerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_DOCUMENT_PARTNER_TYPE: fieldBuilder.buildEdmTypeField(
          'PurchasingDocumentPartnerType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER: fieldBuilder.buildEdmTypeField(
          'Supplier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplierHierarchyCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_HIERARCHY_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SupplierHierarchyCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplierContact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_CONTACT: fieldBuilder.buildEdmTypeField(
          'SupplierContact',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link personWorkAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_WORK_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'PersonWorkAgreement',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employmentInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentInternalID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PARTNER: fieldBuilder.buildEdmTypeField(
          'DefaultPartner',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link sapMessages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_MESSAGES: fieldBuilder.buildCollectionField(
          'SAP__Messages',
          Sap_Message,
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseOrderPartner)
      };
    }

    return this._schema;
  }
}
