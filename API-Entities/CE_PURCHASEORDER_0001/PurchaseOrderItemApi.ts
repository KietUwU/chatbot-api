/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderItem } from './PurchaseOrderItem';
import { PurchaseOrderItemRequestBuilder } from './PurchaseOrderItemRequestBuilder';
import { PurOrderItemDeliveryAddressApi } from './PurOrderItemDeliveryAddressApi';
import { PurchaseOrderApi } from './PurchaseOrderApi';
import { PurchaseOrderInvoicingPlanApi } from './PurchaseOrderInvoicingPlanApi';
import { PurchaseOrderItemNoteApi } from './PurchaseOrderItemNoteApi';
import { PurchaseOrderScheduleLineApi } from './PurchaseOrderScheduleLineApi';
import { PurchaseOrderAccountAssignmentApi } from './PurchaseOrderAccountAssignmentApi';
import { PurOrderItemPricingElementApi } from './PurOrderItemPricingElementApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseOrderItemApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PurchaseOrderItem<DeSerializersT>, DeSerializersT>
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
  ): PurchaseOrderItemApi<DeSerializersT> {
    return new PurchaseOrderItemApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link deliveryAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_ADDRESS: OneToOneLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurOrderItemDeliveryAddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrder_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_1: OneToOneLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderInvoicingPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_INVOICING_PLAN: OneToManyLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderInvoicingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderItemNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_NOTE: OneToManyLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemNoteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderScheduleLineTp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_SCHEDULE_LINE_TP: OneToManyLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderScheduleLineApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purOrdAccountAssignment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PUR_ORD_ACCOUNT_ASSIGNMENT: OneToManyLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderAccountAssignmentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purOrdPricingElement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PUR_ORD_PRICING_ELEMENT: OneToManyLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurOrderItemPricingElementApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurOrderItemDeliveryAddressApi<DeSerializersT>,
      PurchaseOrderApi<DeSerializersT>,
      PurchaseOrderInvoicingPlanApi<DeSerializersT>,
      PurchaseOrderItemNoteApi<DeSerializersT>,
      PurchaseOrderScheduleLineApi<DeSerializersT>,
      PurchaseOrderAccountAssignmentApi<DeSerializersT>,
      PurOrderItemPricingElementApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DELIVERY_ADDRESS: new OneToOneLink(
        '_DeliveryAddress',
        this,
        linkedApis[0]
      ),
      PURCHASE_ORDER_1: new OneToOneLink('_PurchaseOrder', this, linkedApis[1]),
      PURCHASE_ORDER_INVOICING_PLAN: new OneToManyLink(
        '_PurchaseOrderInvoicingPlan',
        this,
        linkedApis[2]
      ),
      PURCHASE_ORDER_ITEM_NOTE: new OneToManyLink(
        '_PurchaseOrderItemNote',
        this,
        linkedApis[3]
      ),
      PURCHASE_ORDER_SCHEDULE_LINE_TP: new OneToManyLink(
        '_PurchaseOrderScheduleLineTP',
        this,
        linkedApis[4]
      ),
      PUR_ORD_ACCOUNT_ASSIGNMENT: new OneToManyLink(
        '_PurOrdAccountAssignment',
        this,
        linkedApis[5]
      ),
      PUR_ORD_PRICING_ELEMENT: new OneToManyLink(
        '_PurOrdPricingElement',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = PurchaseOrderItem;

  requestBuilder(): PurchaseOrderItemRequestBuilder<DeSerializersT> {
    return new PurchaseOrderItemRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderItem<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PurchaseOrderItem<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PurchaseOrderItem<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PurchaseOrderItem,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderItem,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCHASE_ORDER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_CATEGORY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_CURRENCY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_DOCUMENT_DELETION_CODE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL_GROUP: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL_TYPE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_MATERIAL_NUMBER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_SUBRANGE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUFACTURER_PART_NMBR: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUFACTURER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUFACTURER_MATERIAL: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_ITEM_TEXT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_TYPE_CODE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUAL_DELIVERY_ADDRESS_ID: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_DELIVERY_ADDRESS_ID: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBCONTRACTOR: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_IS_SUBCONTRACTOR: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    CROSS_PLANT_CONFIGURABLE_PRODUCT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARTICLE_CATEGORY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLND_ORDER_REPLNMT_ELMNT_TYPE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_PURCHASE_POINTS_QTY_UNIT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_PURCHASE_POINTS_QTY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORAGE_LOCATION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_QUANTITY_UNIT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_ITEM_QTY_TO_BASE_QTY_NMRTR: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_ITEM_QTY_TO_BASE_QTY_DNMNTR: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_PRICE_QUANTITY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_COMPLETELY_DELIVERED: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_FINALLY_INVOICED: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    GOODS_RECEIPT_IS_EXPECTED: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INVOICE_IS_EXPECTED: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_ORDER_ACKN_RQD: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INVOICE_IS_GOODS_RECEIPT_BASED: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PURCHASE_CONTRACT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_CONTRACT_ITEM: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_REQUISITION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_REQUISITION_ITEM: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIREMENT_TRACKING: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_QUOTATION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_QUOTATION_ITEM: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EVALD_RCPT_SETTLMT_IS_ALLOWED: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    UNLIMITED_OVERDELIVERY_IS_ALLOWED: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    OVERDELIV_TOLRTD_LMT_RATIO_IN_PCT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNDERDELIV_TOLRTD_LMT_RATIO_IN_PCT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUISITIONER_NAME: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANNED_DELIVERY_DURATION_IN_DAYS: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GOODS_RECEIPT_DURATION_IN_DAYS: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARTIAL_DELIVERY_IS_ALLOWED: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSUMPTION_POSTING: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_PERFORMER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_PACKAGE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_ITEM_CATEGORY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFIT_CENTER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_PRICE_UNIT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_VOLUME_UNIT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_WEIGHT_UNIT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MULTIPLE_ACCT_ASSGMT_DISTRIBUTION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTIAL_INVOICE_DISTRIBUTION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICING_DATE_CONTROL: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_STATISTICAL_ITEM: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PURCHASING_PARENT_ITEM: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOODS_RECEIPT_LATEST_CREATION_DATE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    IS_RETURNS_ITEM: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PURCHASING_ORDER_REASON: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INCOTERMS_LOCATION_1: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INCOTERMS_LOCATION_2: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIOR_SUPPLIER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNATIONAL_ARTICLE_NUMBER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTRASTAT_SERVICE_CODE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMODITY_CODE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL_FREIGHT_GROUP: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISCOUNT_IN_KIND_ELIGIBILITY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURG_ITEM_IS_BLOCKED_FOR_DELIVERY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SUPPLIER_CONFIRMATION_CONTROL_KEY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURG_DOC_ORDER_ACKN_NUMBER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_IS_TO_BE_PRINTED: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ACCOUNT_ASSIGNMENT_CATEGORY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_INFO_RECORD: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GROSS_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EFFECTIVE_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBTOTAL_1_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBTOTAL_2_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBTOTAL_3_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBTOTAL_4_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBTOTAL_5_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBTOTAL_6_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_QUANTITY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_PRICE_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_VOLUME: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_GROSS_WEIGHT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NET_WEIGHT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_PRICE_UNIT_TO_ORDER_UNIT_NMRTR: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORD_PRICE_UNIT_TO_ORDER_UNIT_DNMNTR: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GOODS_RECEIPT_IS_NON_VALUATED: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_TO_BE_ACCEPTED_AT_ORIGIN: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_JURISDICTION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_COUNTRY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_DETERMINATION_DATE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    SHIPPING_INSTRUCTION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NON_DEDUCTIBLE_INPUT_TAX_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STOCK_TYPE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_TYPE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_CATEGORY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_IS_REJECTED_BY_SUPPLIER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PURG_DOC_PRICE_DATE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    PURCHASING_INFO_RECORD_UPDATE_CODE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_SPECIAL_STOCK_TYPE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_DOCUMENT_TYPE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ISSUING_STORAGE_LOCATION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOCATION_TABLE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOCATION_TABLE_ITEM: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_PROMOTION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURG_CONFIGURABLE_ITEM_NUMBER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURG_DOC_AGGRGD_SUBITEM_CATEGORY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURG_EXTERNAL_SORT_NUMBER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BATCH: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_ITEM_IS_FREE_OF_CHARGE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    DOWN_PAYMENT_TYPE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOWN_PAYMENT_PERCENTAGE_OF_TOT_AMT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOWN_PAYMENT_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOWN_PAYMENT_DUE_DATE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    EXPECTED_OVERALL_LIMIT_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERALL_LIMIT_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PUR_CONTRACT_FOR_OVERALL_LIMIT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PUR_CONTRACT_ITEM_FOR_OVERALL_LIMIT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURG_PROD_CMPLNC_SUPPLIER_STATUS: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURG_PRODUCT_MARKETABILITY_STATUS: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURG_SAFETY_DATA_SHEET_STATUS: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURG_PROD_CMPLNC_DNGRS_GOODS_STATUS: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BR_MATERIAL_ORIGIN: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BR_MATERIAL_USAGE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BR_CFOP_CATEGORY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BR_NCM: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSUMPTION_TAX_CTRL_CODE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BR_IS_PRODUCED_IN_HOUSE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_SEASON_YEAR: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SEASON: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLLECTION: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_THEME: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEASON_COMPLETENESS_STATUS: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_GROUP_RULE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_GROUP_NUMBER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CHARACTERISTIC_1: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CHARACTERISTIC_2: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CHARACTERISTIC_3: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURG_DOC_SUBITEM_CATEGORY: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIVERSION_STATUS: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_DOCUMENT_NUMBER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_DOCUMENT_ITEM: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_REFERENCE_TYPE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_HAS_VALUE_ADDED_SERVICE: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    VAL_ADDED_SRVC_PARENT_ITM_NUMBER: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STOCK_SEGMENT: OrderableEdmTypeField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      PurchaseOrderItem<DeSerializers>,
      DeSerializersT,
      Sap_Message,
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_ADDRESS: OneToOneLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurOrderItemDeliveryAddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrder_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_1: OneToOneLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderInvoicingPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_INVOICING_PLAN: OneToManyLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderInvoicingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderItemNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_NOTE: OneToManyLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemNoteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderScheduleLineTp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_SCHEDULE_LINE_TP: OneToManyLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderScheduleLineApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purOrdAccountAssignment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PUR_ORD_ACCOUNT_ASSIGNMENT: OneToManyLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderAccountAssignmentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purOrdPricingElement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PUR_ORD_PRICING_ELEMENT: OneToManyLink<
      PurchaseOrderItem<DeSerializersT>,
      DeSerializersT,
      PurOrderItemPricingElementApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseOrderItem<DeSerializers>>;
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
         * Static representation of the {@link purchaseOrderCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_CATEGORY: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link documentCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'DocumentCurrency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchasingDocumentDeletionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_DOCUMENT_DELETION_CODE: fieldBuilder.buildEdmTypeField(
          'PurchasingDocumentDeletionCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link materialGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_GROUP: fieldBuilder.buildEdmTypeField(
          'MaterialGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link material} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL: fieldBuilder.buildEdmTypeField(
          'Material',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link materialType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_TYPE: fieldBuilder.buildEdmTypeField(
          'MaterialType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplierMaterialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_MATERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SupplierMaterialNumber',
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
         * Static representation of the {@link manufacturerPartNmbr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_PART_NMBR: fieldBuilder.buildEdmTypeField(
          'ManufacturerPartNmbr',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link manufacturer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER: fieldBuilder.buildEdmTypeField(
          'Manufacturer',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link manufacturerMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_MATERIAL: fieldBuilder.buildEdmTypeField(
          'ManufacturerMaterial',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderItemText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ITEM_TEXT: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderItemText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'ProductTypeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
        /**
         * Static representation of the {@link manualDeliveryAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_DELIVERY_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'ManualDeliveryAddressID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link referenceDeliveryAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DELIVERY_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceDeliveryAddressID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link subcontractor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACTOR: fieldBuilder.buildEdmTypeField(
          'Subcontractor',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplierIsSubcontractor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_IS_SUBCONTRACTOR: fieldBuilder.buildEdmTypeField(
          'SupplierIsSubcontractor',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link crossPlantConfigurableProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_PLANT_CONFIGURABLE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'CrossPlantConfigurableProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link articleCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ArticleCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plndOrderReplnmtElmntType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLND_ORDER_REPLNMT_ELMNT_TYPE: fieldBuilder.buildEdmTypeField(
          'PlndOrderReplnmtElmntType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productPurchasePointsQtyUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_PURCHASE_POINTS_QTY_UNIT: fieldBuilder.buildEdmTypeField(
          'ProductPurchasePointsQtyUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productPurchasePointsQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_PURCHASE_POINTS_QTY: fieldBuilder.buildEdmTypeField(
          'ProductPurchasePointsQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link storageLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_LOCATION: fieldBuilder.buildEdmTypeField(
          'StorageLocation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderQuantityUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderItemQtyToBaseQtyNmrtr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ITEM_QTY_TO_BASE_QTY_NMRTR: fieldBuilder.buildEdmTypeField(
          'OrderItemQtyToBaseQtyNmrtr',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderItemQtyToBaseQtyDnmntr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ITEM_QTY_TO_BASE_QTY_DNMNTR: fieldBuilder.buildEdmTypeField(
          'OrderItemQtyToBaseQtyDnmntr',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link netPriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'NetPriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isCompletelyDelivered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMPLETELY_DELIVERED: fieldBuilder.buildEdmTypeField(
          'IsCompletelyDelivered',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isFinallyInvoiced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINALLY_INVOICED: fieldBuilder.buildEdmTypeField(
          'IsFinallyInvoiced',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link goodsReceiptIsExpected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_RECEIPT_IS_EXPECTED: fieldBuilder.buildEdmTypeField(
          'GoodsReceiptIsExpected',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link invoiceIsExpected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_IS_EXPECTED: fieldBuilder.buildEdmTypeField(
          'InvoiceIsExpected',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isOrderAcknRqd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ORDER_ACKN_RQD: fieldBuilder.buildEdmTypeField(
          'IsOrderAcknRqd',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link invoiceIsGoodsReceiptBased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_IS_GOODS_RECEIPT_BASED: fieldBuilder.buildEdmTypeField(
          'InvoiceIsGoodsReceiptBased',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link purchaseContract} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CONTRACT: fieldBuilder.buildEdmTypeField(
          'PurchaseContract',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseContractItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CONTRACT_ITEM: fieldBuilder.buildEdmTypeField(
          'PurchaseContractItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseRequisition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REQUISITION: fieldBuilder.buildEdmTypeField(
          'PurchaseRequisition',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseRequisitionItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_REQUISITION_ITEM: fieldBuilder.buildEdmTypeField(
          'PurchaseRequisitionItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requirementTracking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_TRACKING: fieldBuilder.buildEdmTypeField(
          'RequirementTracking',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplierQuotation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_QUOTATION: fieldBuilder.buildEdmTypeField(
          'SupplierQuotation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplierQuotationItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_QUOTATION_ITEM: fieldBuilder.buildEdmTypeField(
          'SupplierQuotationItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link evaldRcptSettlmtIsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVALD_RCPT_SETTLMT_IS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'EvaldRcptSettlmtIsAllowed',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link unlimitedOverdeliveryIsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLIMITED_OVERDELIVERY_IS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'UnlimitedOverdeliveryIsAllowed',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link overdelivTolrtdLmtRatioInPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERDELIV_TOLRTD_LMT_RATIO_IN_PCT: fieldBuilder.buildEdmTypeField(
          'OverdelivTolrtdLmtRatioInPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link underdelivTolrtdLmtRatioInPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDERDELIV_TOLRTD_LMT_RATIO_IN_PCT: fieldBuilder.buildEdmTypeField(
          'UnderdelivTolrtdLmtRatioInPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requisitionerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITIONER_NAME: fieldBuilder.buildEdmTypeField(
          'RequisitionerName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plannedDeliveryDurationInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_DELIVERY_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'PlannedDeliveryDurationInDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link goodsReceiptDurationInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_RECEIPT_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'GoodsReceiptDurationInDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link partialDeliveryIsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTIAL_DELIVERY_IS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'PartialDeliveryIsAllowed',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link consumptionPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_POSTING: fieldBuilder.buildEdmTypeField(
          'ConsumptionPosting',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link servicePerformer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_PERFORMER: fieldBuilder.buildEdmTypeField(
          'ServicePerformer',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link servicePackage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_PACKAGE: fieldBuilder.buildEdmTypeField(
          'ServicePackage',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link baseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'BaseUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderItemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderItemCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link profitCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_CENTER: fieldBuilder.buildEdmTypeField(
          'ProfitCenter',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderPriceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'OrderPriceUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemVolumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'ItemVolumeUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemWeightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'ItemWeightUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link multipleAcctAssgmtDistribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLE_ACCT_ASSGMT_DISTRIBUTION: fieldBuilder.buildEdmTypeField(
          'MultipleAcctAssgmtDistribution',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partialInvoiceDistribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTIAL_INVOICE_DISTRIBUTION: fieldBuilder.buildEdmTypeField(
          'PartialInvoiceDistribution',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link pricingDateControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_DATE_CONTROL: fieldBuilder.buildEdmTypeField(
          'PricingDateControl',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isStatisticalItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STATISTICAL_ITEM: fieldBuilder.buildEdmTypeField(
          'IsStatisticalItem',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link purchasingParentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_PARENT_ITEM: fieldBuilder.buildEdmTypeField(
          'PurchasingParentItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link goodsReceiptLatestCreationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_RECEIPT_LATEST_CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'GoodsReceiptLatestCreationDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link isReturnsItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETURNS_ITEM: fieldBuilder.buildEdmTypeField(
          'IsReturnsItem',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link purchasingOrderReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_ORDER_REASON: fieldBuilder.buildEdmTypeField(
          'PurchasingOrderReason',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link incotermsClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'IncotermsClassification',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link incotermsTransferLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField(
          'IncotermsTransferLocation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link incotermsLocation1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField(
          'IncotermsLocation1',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link incotermsLocation2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField(
          'IncotermsLocation2',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priorSupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIOR_SUPPLIER: fieldBuilder.buildEdmTypeField(
          'PriorSupplier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link internationalArticleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_ARTICLE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InternationalArticleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link intrastatServiceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_SERVICE_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatServiceCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link commodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_CODE: fieldBuilder.buildEdmTypeField(
          'CommodityCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link materialFreightGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_FREIGHT_GROUP: fieldBuilder.buildEdmTypeField(
          'MaterialFreightGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link discountInKindEligibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_IN_KIND_ELIGIBILITY: fieldBuilder.buildEdmTypeField(
          'DiscountInKindEligibility',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purgItemIsBlockedForDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_ITEM_IS_BLOCKED_FOR_DELIVERY: fieldBuilder.buildEdmTypeField(
          'PurgItemIsBlockedForDelivery',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link supplierConfirmationControlKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_CONFIRMATION_CONTROL_KEY: fieldBuilder.buildEdmTypeField(
          'SupplierConfirmationControlKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purgDocOrderAcknNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_DOC_ORDER_ACKN_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurgDocOrderAcknNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceIsToBePrinted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_IS_TO_BE_PRINTED: fieldBuilder.buildEdmTypeField(
          'PriceIsToBePrinted',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link accountAssignmentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_ASSIGNMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'AccountAssignmentCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchasingInfoRecord} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_INFO_RECORD: fieldBuilder.buildEdmTypeField(
          'PurchasingInfoRecord',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link grossAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'GrossAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link effectiveAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'EffectiveAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subtotal1Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_1_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal1Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subtotal2Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_2_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal2Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subtotal3Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_3_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal3Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subtotal4Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_4_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal4Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subtotal5Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_5_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal5Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subtotal6Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_6_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal6Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link netPriceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PRICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetPriceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_VOLUME: fieldBuilder.buildEdmTypeField(
          'ItemVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemGrossWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROSS_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ItemGrossWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemNetWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NET_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ItemNetWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderPriceUnitToOrderUnitNmrtr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_PRICE_UNIT_TO_ORDER_UNIT_NMRTR: fieldBuilder.buildEdmTypeField(
          'OrderPriceUnitToOrderUnitNmrtr',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ordPriceUnitToOrderUnitDnmntr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORD_PRICE_UNIT_TO_ORDER_UNIT_DNMNTR: fieldBuilder.buildEdmTypeField(
          'OrdPriceUnitToOrderUnitDnmntr',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link goodsReceiptIsNonValuated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_RECEIPT_IS_NON_VALUATED: fieldBuilder.buildEdmTypeField(
          'GoodsReceiptIsNonValuated',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isToBeAcceptedAtOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TO_BE_ACCEPTED_AT_ORIGIN: fieldBuilder.buildEdmTypeField(
          'IsToBeAcceptedAtOrigin',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField(
          'TaxCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxJurisdiction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_JURISDICTION: fieldBuilder.buildEdmTypeField(
          'TaxJurisdiction',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COUNTRY: fieldBuilder.buildEdmTypeField(
          'TaxCountry',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxDeterminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DETERMINATION_DATE: fieldBuilder.buildEdmTypeField(
          'TaxDeterminationDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link shippingInstruction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_INSTRUCTION: fieldBuilder.buildEdmTypeField(
          'ShippingInstruction',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link nonDeductibleInputTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_DEDUCTIBLE_INPUT_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NonDeductibleInputTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link stockType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_TYPE: fieldBuilder.buildEdmTypeField(
          'StockType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valuationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_TYPE: fieldBuilder.buildEdmTypeField(
          'ValuationType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valuationCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ValuationCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemIsRejectedBySupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_IS_REJECTED_BY_SUPPLIER: fieldBuilder.buildEdmTypeField(
          'ItemIsRejectedBySupplier',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link purgDocPriceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_DOC_PRICE_DATE: fieldBuilder.buildEdmTypeField(
          'PurgDocPriceDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link purchasingInfoRecordUpdateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_INFO_RECORD_UPDATE_CODE: fieldBuilder.buildEdmTypeField(
          'PurchasingInfoRecordUpdateCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventorySpecialStockType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SPECIAL_STOCK_TYPE: fieldBuilder.buildEdmTypeField(
          'InventorySpecialStockType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'DeliveryDocumentType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link issuingStorageLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUING_STORAGE_LOCATION: fieldBuilder.buildEdmTypeField(
          'IssuingStorageLocation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allocationTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_TABLE: fieldBuilder.buildEdmTypeField(
          'AllocationTable',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allocationTableItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_TABLE_ITEM: fieldBuilder.buildEdmTypeField(
          'AllocationTableItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link retailPromotion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PROMOTION: fieldBuilder.buildEdmTypeField(
          'RetailPromotion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purgConfigurableItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_CONFIGURABLE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurgConfigurableItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purgDocAggrgdSubitemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_DOC_AGGRGD_SUBITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'PurgDocAggrgdSubitemCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purgExternalSortNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_EXTERNAL_SORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurgExternalSortNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link batch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH: fieldBuilder.buildEdmTypeField('Batch', 'Edm.String', false),
        /**
         * Static representation of the {@link purchasingItemIsFreeOfCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_ITEM_IS_FREE_OF_CHARGE: fieldBuilder.buildEdmTypeField(
          'PurchasingItemIsFreeOfCharge',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link downPaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'DownPaymentType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link downPaymentPercentageOfTotAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_PERCENTAGE_OF_TOT_AMT: fieldBuilder.buildEdmTypeField(
          'DownPaymentPercentageOfTotAmt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link downPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DownPaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link downPaymentDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DownPaymentDueDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link expectedOverallLimitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_OVERALL_LIMIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExpectedOverallLimitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link overallLimitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERALL_LIMIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OverallLimitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purContractForOverallLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUR_CONTRACT_FOR_OVERALL_LIMIT: fieldBuilder.buildEdmTypeField(
          'PurContractForOverallLimit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purContractItemForOverallLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUR_CONTRACT_ITEM_FOR_OVERALL_LIMIT: fieldBuilder.buildEdmTypeField(
          'PurContractItemForOverallLimit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purgProdCmplncSupplierStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_PROD_CMPLNC_SUPPLIER_STATUS: fieldBuilder.buildEdmTypeField(
          'PurgProdCmplncSupplierStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purgProductMarketabilityStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_PRODUCT_MARKETABILITY_STATUS: fieldBuilder.buildEdmTypeField(
          'PurgProductMarketabilityStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purgSafetyDataSheetStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_SAFETY_DATA_SHEET_STATUS: fieldBuilder.buildEdmTypeField(
          'PurgSafetyDataSheetStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purgProdCmplncDngrsGoodsStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_PROD_CMPLNC_DNGRS_GOODS_STATUS: fieldBuilder.buildEdmTypeField(
          'PurgProdCmplncDngrsGoodsStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link brMaterialOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BR_MATERIAL_ORIGIN: fieldBuilder.buildEdmTypeField(
          'BR_MaterialOrigin',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link brMaterialUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BR_MATERIAL_USAGE: fieldBuilder.buildEdmTypeField(
          'BR_MaterialUsage',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link brCfopCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BR_CFOP_CATEGORY: fieldBuilder.buildEdmTypeField(
          'BR_CFOPCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link brNcm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BR_NCM: fieldBuilder.buildEdmTypeField('BR_NCM', 'Edm.String', false),
        /**
         * Static representation of the {@link consumptionTaxCtrlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_TAX_CTRL_CODE: fieldBuilder.buildEdmTypeField(
          'ConsumptionTaxCtrlCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link brIsProducedInHouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BR_IS_PRODUCED_IN_HOUSE: fieldBuilder.buildEdmTypeField(
          'BR_IsProducedInHouse',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productSeasonYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEASON_YEAR: fieldBuilder.buildEdmTypeField(
          'ProductSeasonYear',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSeason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEASON: fieldBuilder.buildEdmTypeField(
          'ProductSeason',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLLECTION: fieldBuilder.buildEdmTypeField(
          'ProductCollection',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productTheme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_THEME: fieldBuilder.buildEdmTypeField(
          'ProductTheme',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link seasonCompletenessStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEASON_COMPLETENESS_STATUS: fieldBuilder.buildEdmTypeField(
          'SeasonCompletenessStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shippingGroupRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_GROUP_RULE: fieldBuilder.buildEdmTypeField(
          'ShippingGroupRule',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shippingGroupNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_GROUP_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingGroupNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productCharacteristic1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CHARACTERISTIC_1: fieldBuilder.buildEdmTypeField(
          'ProductCharacteristic1',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productCharacteristic2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CHARACTERISTIC_2: fieldBuilder.buildEdmTypeField(
          'ProductCharacteristic2',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productCharacteristic3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CHARACTERISTIC_3: fieldBuilder.buildEdmTypeField(
          'ProductCharacteristic3',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purgDocSubitemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURG_DOC_SUBITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'PurgDocSubitemCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link diversionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVERSION_STATUS: fieldBuilder.buildEdmTypeField(
          'DiversionStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link referenceDocumentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReferenceDocumentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link referenceDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'ReferenceDocumentItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderReferenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_REFERENCE_TYPE: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderReferenceType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemHasValueAddedService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_HAS_VALUE_ADDED_SERVICE: fieldBuilder.buildEdmTypeField(
          'ItemHasValueAddedService',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link valAddedSrvcParentItmNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_PARENT_ITM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcParentItmNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stockSegment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_SEGMENT: fieldBuilder.buildEdmTypeField(
          'StockSegment',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', PurchaseOrderItem)
      };
    }

    return this._schema;
  }
}
