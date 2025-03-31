/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderInvoicingPlan } from './PurchaseOrderInvoicingPlan';
import { PurchaseOrderInvoicingPlanRequestBuilder } from './PurchaseOrderInvoicingPlanRequestBuilder';
import { PurchaseOrderInvoicingPlanItemApi } from './PurchaseOrderInvoicingPlanItemApi';
import { PurchaseOrderApi } from './PurchaseOrderApi';
import { PurchaseOrderItemApi } from './PurchaseOrderItemApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseOrderInvoicingPlanApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseOrderInvoicingPlan<DeSerializersT>, DeSerializersT>
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
  ): PurchaseOrderInvoicingPlanApi<DeSerializersT> {
    return new PurchaseOrderInvoicingPlanApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link poInvoicingPlanItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PO_INVOICING_PLAN_ITEM: OneToManyLink<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderInvoicingPlanItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrder_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_1: OneToOneLink<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderItem_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_1: OneToOneLink<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseOrderInvoicingPlanItemApi<DeSerializersT>,
      PurchaseOrderApi<DeSerializersT>,
      PurchaseOrderItemApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PO_INVOICING_PLAN_ITEM: new OneToManyLink(
        '_POInvoicingPlanItem',
        this,
        linkedApis[0]
      ),
      PURCHASE_ORDER_1: new OneToOneLink('_PurchaseOrder', this, linkedApis[1]),
      PURCHASE_ORDER_ITEM_1: new OneToOneLink(
        '_PurchaseOrderItem',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = PurchaseOrderInvoicingPlan;

  requestBuilder(): PurchaseOrderInvoicingPlanRequestBuilder<DeSerializersT> {
    return new PurchaseOrderInvoicingPlanRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderInvoicingPlan<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseOrderInvoicingPlan<DeSerializersT>,
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
    typeof PurchaseOrderInvoicingPlan,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderInvoicingPlan,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCHASE_ORDER: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICING_PLAN: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICING_PLAN_TYPE: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICING_PLAN_START_DATE: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    INVOICING_PLAN_END_DATE: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    INVOICING_PLAN_NEXT_INVC_DATE_RULE: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_ORGANIZATION: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_GROUP: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_TYPE: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      PurchaseOrderInvoicingPlan<DeSerializers>,
      DeSerializersT,
      Sap_Message,
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link poInvoicingPlanItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PO_INVOICING_PLAN_ITEM: OneToManyLink<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderInvoicingPlanItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrder_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_1: OneToOneLink<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderItem_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_1: OneToOneLink<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseOrderInvoicingPlan<DeSerializers>>;
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
         * Static representation of the {@link purchaseOrderItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ITEM: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoicingPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PLAN: fieldBuilder.buildEdmTypeField(
          'InvoicingPlan',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoicingPlanType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PLAN_TYPE: fieldBuilder.buildEdmTypeField(
          'InvoicingPlanType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoicingPlanStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PLAN_START_DATE: fieldBuilder.buildEdmTypeField(
          'InvoicingPlanStartDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link invoicingPlanEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PLAN_END_DATE: fieldBuilder.buildEdmTypeField(
          'InvoicingPlanEndDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link invoicingPlanNextInvcDateRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PLAN_NEXT_INVC_DATE_RULE: fieldBuilder.buildEdmTypeField(
          'InvoicingPlanNextInvcDateRule',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link purchasingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_GROUP: fieldBuilder.buildEdmTypeField(
          'PurchasingGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_TYPE: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', PurchaseOrderInvoicingPlan)
      };
    }

    return this._schema;
  }
}
