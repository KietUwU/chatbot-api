/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderScheduleLine } from './PurchaseOrderScheduleLine';
import { PurchaseOrderScheduleLineRequestBuilder } from './PurchaseOrderScheduleLineRequestBuilder';
import { PurchaseOrderApi } from './PurchaseOrderApi';
import { PurchaseOrderItemApi } from './PurchaseOrderItemApi';
import { PoSubcontractingComponentApi } from './PoSubcontractingComponentApi';
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
  Time,
  OrderableEdmTypeField,
  CollectionField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseOrderScheduleLineApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseOrderScheduleLine<DeSerializersT>, DeSerializersT>
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
  ): PurchaseOrderScheduleLineApi<DeSerializersT> {
    return new PurchaseOrderScheduleLineApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrder_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_1: OneToOneLink<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderItem_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_1: OneToOneLink<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link subcontractingComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUBCONTRACTING_COMPONENT: OneToManyLink<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT,
      PoSubcontractingComponentApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseOrderApi<DeSerializersT>,
      PurchaseOrderItemApi<DeSerializersT>,
      PoSubcontractingComponentApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_ORDER_1: new OneToOneLink('_PurchaseOrder', this, linkedApis[0]),
      PURCHASE_ORDER_ITEM_1: new OneToOneLink(
        '_PurchaseOrderItem',
        this,
        linkedApis[1]
      ),
      SUBCONTRACTING_COMPONENT: new OneToManyLink(
        '_SubcontractingComponent',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = PurchaseOrderScheduleLine;

  requestBuilder(): PurchaseOrderScheduleLineRequestBuilder<DeSerializersT> {
    return new PurchaseOrderScheduleLineRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderScheduleLine<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseOrderScheduleLine<DeSerializersT>,
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
    typeof PurchaseOrderScheduleLine,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderScheduleLine,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCHASE_ORDER: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_LINE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_LINE_DELIVERY_DATE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    SCHED_LINE_STSC_DELIVERY_DATE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    PERFORMANCE_PERIOD_START_DATE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    PERFORMANCE_PERIOD_END_DATE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    SCHEDULE_LINE_DELIVERY_TIME: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      false,
      true
    >;
    BATCH: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BATCH_BY_SUPPLIER: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_LINE_ORDER_QUANTITY: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPEN_PURCHASE_ORDER_QUANTITY: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_ORDER_QUANTITY_UNIT: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_REQUISITION: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_REQUISITION_ITEM: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIV_DATE_CATEGORY: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_LINE_ORDER_DATE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    PRODUCT_AVAILABILITY_DATE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    LOADING_DATE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    LOADING_TIME: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      false,
      true
    >;
    TRANSPORTATION_PLANNING_DATE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    TRANSPORTATION_PLANNING_TIME: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      false,
      true
    >;
    GOODS_ISSUE_DATE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    GOODS_ISSUE_TIME: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      false,
      true
    >;
    ROUTE_SCHEDULE: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_AVAILABILITY_TIME: OrderableEdmTypeField<
      PurchaseOrderScheduleLine<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      PurchaseOrderScheduleLine<DeSerializers>,
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
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderItem_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_1: OneToOneLink<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link subcontractingComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUBCONTRACTING_COMPONENT: OneToManyLink<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT,
      PoSubcontractingComponentApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseOrderScheduleLine<DeSerializers>>;
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
         * Static representation of the {@link scheduleLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE: fieldBuilder.buildEdmTypeField(
          'ScheduleLine',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scheduleLineDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduleLineDeliveryDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link schedLineStscDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHED_LINE_STSC_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'SchedLineStscDeliveryDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link performancePeriodStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE_PERIOD_START_DATE: fieldBuilder.buildEdmTypeField(
          'PerformancePeriodStartDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link performancePeriodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE_PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PerformancePeriodEndDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link scheduleLineDeliveryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_DELIVERY_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduleLineDeliveryTime',
          'Edm.TimeOfDay',
          false
        ),
        /**
         * Static representation of the {@link batch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH: fieldBuilder.buildEdmTypeField('Batch', 'Edm.String', false),
        /**
         * Static representation of the {@link batchBySupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_BY_SUPPLIER: fieldBuilder.buildEdmTypeField(
          'BatchBySupplier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scheduleLineOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ScheduleLineOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link openPurchaseOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_PURCHASE_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OpenPurchaseOrderQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
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
         * Static representation of the {@link delivDateCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIV_DATE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'DelivDateCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scheduleLineOrderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduleLineOrderDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link productAvailabilityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_AVAILABILITY_DATE: fieldBuilder.buildEdmTypeField(
          'ProductAvailabilityDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link loadingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_DATE: fieldBuilder.buildEdmTypeField(
          'LoadingDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link loadingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_TIME: fieldBuilder.buildEdmTypeField(
          'LoadingTime',
          'Edm.TimeOfDay',
          false
        ),
        /**
         * Static representation of the {@link transportationPlanningDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_PLANNING_DATE: fieldBuilder.buildEdmTypeField(
          'TransportationPlanningDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link transportationPlanningTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_PLANNING_TIME: fieldBuilder.buildEdmTypeField(
          'TransportationPlanningTime',
          'Edm.TimeOfDay',
          false
        ),
        /**
         * Static representation of the {@link goodsIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'GoodsIssueDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link goodsIssueTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_ISSUE_TIME: fieldBuilder.buildEdmTypeField(
          'GoodsIssueTime',
          'Edm.TimeOfDay',
          false
        ),
        /**
         * Static representation of the {@link routeSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'RouteSchedule',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productAvailabilityTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_AVAILABILITY_TIME: fieldBuilder.buildEdmTypeField(
          'ProductAvailabilityTime',
          'Edm.TimeOfDay',
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
        ALL_FIELDS: new AllFields('*', PurchaseOrderScheduleLine)
      };
    }

    return this._schema;
  }
}
