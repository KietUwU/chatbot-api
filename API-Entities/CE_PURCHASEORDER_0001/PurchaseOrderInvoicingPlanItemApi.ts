/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderInvoicingPlanItem } from './PurchaseOrderInvoicingPlanItem';
import { PurchaseOrderInvoicingPlanItemRequestBuilder } from './PurchaseOrderInvoicingPlanItemRequestBuilder';
import { PurchaseOrderApi } from './PurchaseOrderApi';
import { PurchaseOrderInvoicingPlanApi } from './PurchaseOrderInvoicingPlanApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseOrderInvoicingPlanItemApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseOrderInvoicingPlanItem<DeSerializersT>, DeSerializersT>
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
  ): PurchaseOrderInvoicingPlanItemApi<DeSerializersT> {
    return new PurchaseOrderInvoicingPlanItemApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrder_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_1: OneToOneLink<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderInvoicingPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_INVOICING_PLAN: OneToOneLink<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderInvoicingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderItem_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_1: OneToOneLink<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseOrderApi<DeSerializersT>,
      PurchaseOrderInvoicingPlanApi<DeSerializersT>,
      PurchaseOrderItemApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_ORDER_1: new OneToOneLink('_PurchaseOrder', this, linkedApis[0]),
      PURCHASE_ORDER_INVOICING_PLAN: new OneToOneLink(
        '_PurchaseOrderInvoicingPlan',
        this,
        linkedApis[1]
      ),
      PURCHASE_ORDER_ITEM_1: new OneToOneLink(
        '_PurchaseOrderItem',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = PurchaseOrderInvoicingPlanItem;

  requestBuilder(): PurchaseOrderInvoicingPlanItemRequestBuilder<DeSerializersT> {
    return new PurchaseOrderInvoicingPlanItemRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderInvoicingPlanItem<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseOrderInvoicingPlanItem<DeSerializersT>,
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
    typeof PurchaseOrderInvoicingPlanItem,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderInvoicingPlanItem,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCHASE_ORDER: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICING_PLAN_ITEM: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICING_PLAN: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICING_PLAN_SETTLEMENT_FROM_DTE: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    INVOICING_PLAN_SETTLEMENT_TO_DTE: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    INVOICING_PLAN_INVOICING_DATE: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    INVOICING_PLAN_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_ORGANIZATION: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_GROUP: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_TYPE: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      PurchaseOrderInvoicingPlanItem<DeSerializers>,
      DeSerializersT,
      Sap_Message,
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrder_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_1: OneToOneLink<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderInvoicingPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_INVOICING_PLAN: OneToOneLink<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderInvoicingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderItem_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_1: OneToOneLink<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseOrderInvoicingPlanItem<DeSerializers>>;
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
         * Static representation of the {@link invoicingPlanItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PLAN_ITEM: fieldBuilder.buildEdmTypeField(
          'InvoicingPlanItem',
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
         * Static representation of the {@link invoicingPlanSettlementFromDte} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PLAN_SETTLEMENT_FROM_DTE: fieldBuilder.buildEdmTypeField(
          'InvoicingPlanSettlementFromDte',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link invoicingPlanSettlementToDte} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PLAN_SETTLEMENT_TO_DTE: fieldBuilder.buildEdmTypeField(
          'InvoicingPlanSettlementToDte',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link invoicingPlanInvoicingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PLAN_INVOICING_DATE: fieldBuilder.buildEdmTypeField(
          'InvoicingPlanInvoicingDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link invoicingPlanAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PLAN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoicingPlanAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransactionCurrency',
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
        ALL_FIELDS: new AllFields('*', PurchaseOrderInvoicingPlanItem)
      };
    }

    return this._schema;
  }
}
