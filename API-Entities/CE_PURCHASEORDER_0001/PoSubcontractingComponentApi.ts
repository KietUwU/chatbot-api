/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PoSubcontractingComponent } from './PoSubcontractingComponent';
import { PoSubcontractingComponentRequestBuilder } from './PoSubcontractingComponentRequestBuilder';
import { PurchaseOrderApi } from './PurchaseOrderApi';
import { PurchaseOrderItemApi } from './PurchaseOrderItemApi';
import { PurchaseOrderScheduleLineApi } from './PurchaseOrderScheduleLineApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PoSubcontractingComponentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PoSubcontractingComponent<DeSerializersT>, DeSerializersT>
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
  ): PoSubcontractingComponentApi<DeSerializersT> {
    return new PoSubcontractingComponentApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrder_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_1: OneToOneLink<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderItem_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_1: OneToOneLink<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link scheduleLine_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULE_LINE_1: OneToOneLink<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderScheduleLineApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseOrderApi<DeSerializersT>,
      PurchaseOrderItemApi<DeSerializersT>,
      PurchaseOrderScheduleLineApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_ORDER_1: new OneToOneLink('_PurchaseOrder', this, linkedApis[0]),
      PURCHASE_ORDER_ITEM_1: new OneToOneLink(
        '_PurchaseOrderItem',
        this,
        linkedApis[1]
      ),
      SCHEDULE_LINE_1: new OneToOneLink('_ScheduleLine', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = PoSubcontractingComponent;

  requestBuilder(): PoSubcontractingComponentRequestBuilder<DeSerializersT> {
    return new PoSubcontractingComponentRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PoSubcontractingComponent<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PoSubcontractingComponent<DeSerializersT>,
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
    typeof PoSubcontractingComponent,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PoSubcontractingComponent,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCHASE_ORDER: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_LINE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESERVATION_ITEM: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_TYPE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_MATERIAL_PROVISION: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    MATERIAL_PROVISION_TYPE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL_QTY_TO_BASE_QTY_NMRTR: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MATERIAL_QTY_TO_BASE_QTY_DNMNTR: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MATERIAL_REVISION_LEVEL: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL_COMP_IS_VARIABLE_SIZED: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    MATERIAL_COMPONENT_IS_PHANTOM_ITEM: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    RESERVATION: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIRED_QUANTITY: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUIREMENT_DATE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    REQUIREMENT_TIME: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      false,
      true
    >;
    RESERVATION_IS_FINALLY_ISSUED: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUANTITY_IN_ENTRY_UNIT: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENTRY_UNIT: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VARIABLE_SIZE_ITEM_QUANTITY: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIABLE_SIZE_ITEM_UNIT: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VARIABLE_SIZE_COMPONENT_UNIT: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VARIABLE_SIZE_COMPONENT_QUANTITY: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASURE_FOR_SIZE_1_TO_3: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SIZE_1: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SIZE_2: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SIZE_3: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LATEST_REQUIREMENT_DATE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    ORDER_LEVEL_VALUE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_PATH_VALUE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_ITEM_NUMBER: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATL_COMP_FREE_DEFINED_ATTRIBUTE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOM_ITEM_CATEGORY: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_BULK_MATERIAL_COMPONENT: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ACCOUNT_ASSIGNMENT_CATEGORY: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_SPECIAL_STOCK_TYPE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSUMPTION_POSTING: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_SPECIAL_STOCK_VALN_TYPE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEBIT_CREDIT_CODE: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WITHDRAWN_QUANTITY: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_IS_FIXED: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    COMPONENT_SCRAP_IN_PERCENT: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATION_SCRAP_IN_PERCENT: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_NET_SCRAP: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    LEAD_TIME_OFFSET: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_DISTRIBUTION_KEY: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORMULA_KEY: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_LOCATION: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_SUPPLY_AREA: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BATCH: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOM_ITEM_DESCRIPTION: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOM_ITEM_TEXT_2: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHANGE_NUMBER: OrderableEdmTypeField<
      PoSubcontractingComponent<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      PoSubcontractingComponent<DeSerializers>,
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
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderItem_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_1: OneToOneLink<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link scheduleLine_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULE_LINE_1: OneToOneLink<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderScheduleLineApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PoSubcontractingComponent<DeSerializers>>;
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
         * Static representation of the {@link reservationItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_ITEM: fieldBuilder.buildEdmTypeField(
          'ReservationItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recordType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_TYPE: fieldBuilder.buildEdmTypeField(
          'RecordType',
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
         * Static representation of the {@link isMaterialProvision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MATERIAL_PROVISION: fieldBuilder.buildEdmTypeField(
          'IsMaterialProvision',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link materialProvisionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_PROVISION_TYPE: fieldBuilder.buildEdmTypeField(
          'MaterialProvisionType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link materialQtyToBaseQtyNmrtr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_QTY_TO_BASE_QTY_NMRTR: fieldBuilder.buildEdmTypeField(
          'MaterialQtyToBaseQtyNmrtr',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link materialQtyToBaseQtyDnmntr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_QTY_TO_BASE_QTY_DNMNTR: fieldBuilder.buildEdmTypeField(
          'MaterialQtyToBaseQtyDnmntr',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link materialRevisionLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_REVISION_LEVEL: fieldBuilder.buildEdmTypeField(
          'MaterialRevisionLevel',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link materialCompIsVariableSized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_COMP_IS_VARIABLE_SIZED: fieldBuilder.buildEdmTypeField(
          'MaterialCompIsVariableSized',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link materialComponentIsPhantomItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_COMPONENT_IS_PHANTOM_ITEM: fieldBuilder.buildEdmTypeField(
          'MaterialComponentIsPhantomItem',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link reservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION: fieldBuilder.buildEdmTypeField(
          'Reservation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requiredQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RequiredQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requirementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_DATE: fieldBuilder.buildEdmTypeField(
          'RequirementDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link requirementTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_TIME: fieldBuilder.buildEdmTypeField(
          'RequirementTime',
          'Edm.TimeOfDay',
          false
        ),
        /**
         * Static representation of the {@link reservationIsFinallyIssued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_IS_FINALLY_ISSUED: fieldBuilder.buildEdmTypeField(
          'ReservationIsFinallyIssued',
          'Edm.Boolean',
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
         * Static representation of the {@link quantityInEntryUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_IN_ENTRY_UNIT: fieldBuilder.buildEdmTypeField(
          'QuantityInEntryUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link entryUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_UNIT: fieldBuilder.buildEdmTypeField(
          'EntryUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link variableSizeItemQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_SIZE_ITEM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'VariableSizeItemQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link variableSizeItemUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_SIZE_ITEM_UNIT: fieldBuilder.buildEdmTypeField(
          'VariableSizeItemUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link variableSizeComponentUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_SIZE_COMPONENT_UNIT: fieldBuilder.buildEdmTypeField(
          'VariableSizeComponentUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link variableSizeComponentQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_SIZE_COMPONENT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'VariableSizeComponentQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasureForSize1To3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_FOR_SIZE_1_TO_3: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasureForSize1To3',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link size1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_1: fieldBuilder.buildEdmTypeField('Size1', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link size2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_2: fieldBuilder.buildEdmTypeField('Size2', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link size3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_3: fieldBuilder.buildEdmTypeField('Size3', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
        /**
         * Static representation of the {@link latestRequirementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATEST_REQUIREMENT_DATE: fieldBuilder.buildEdmTypeField(
          'LatestRequirementDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link orderLevelValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_LEVEL_VALUE: fieldBuilder.buildEdmTypeField(
          'OrderLevelValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderPathValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_PATH_VALUE: fieldBuilder.buildEdmTypeField(
          'OrderPathValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billOfMaterialItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link matlCompFreeDefinedAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATL_COMP_FREE_DEFINED_ATTRIBUTE: fieldBuilder.buildEdmTypeField(
          'MatlCompFreeDefinedAttribute',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bomItemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'BOMItemCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isBulkMaterialComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BULK_MATERIAL_COMPONENT: fieldBuilder.buildEdmTypeField(
          'IsBulkMaterialComponent',
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
         * Static representation of the {@link inventorySpecialStockType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SPECIAL_STOCK_TYPE: fieldBuilder.buildEdmTypeField(
          'InventorySpecialStockType',
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
         * Static representation of the {@link inventorySpecialStockValnType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SPECIAL_STOCK_VALN_TYPE: fieldBuilder.buildEdmTypeField(
          'InventorySpecialStockValnType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link debitCreditCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_CREDIT_CODE: fieldBuilder.buildEdmTypeField(
          'DebitCreditCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link withdrawnQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHDRAWN_QUANTITY: fieldBuilder.buildEdmTypeField(
          'WithdrawnQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityIsFixed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_IS_FIXED: fieldBuilder.buildEdmTypeField(
          'QuantityIsFixed',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link componentScrapInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_SCRAP_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'ComponentScrapInPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operationScrapInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_SCRAP_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'OperationScrapInPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isNetScrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NET_SCRAP: fieldBuilder.buildEdmTypeField(
          'IsNetScrap',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link leadTimeOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAD_TIME_OFFSET: fieldBuilder.buildEdmTypeField(
          'LeadTimeOffset',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityDistributionKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_DISTRIBUTION_KEY: fieldBuilder.buildEdmTypeField(
          'QuantityDistributionKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link formulaKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_KEY: fieldBuilder.buildEdmTypeField(
          'FormulaKey',
          'Edm.String',
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
         * Static representation of the {@link productionSupplyArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SUPPLY_AREA: fieldBuilder.buildEdmTypeField(
          'ProductionSupplyArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link batch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH: fieldBuilder.buildEdmTypeField('Batch', 'Edm.String', false),
        /**
         * Static representation of the {@link bomItemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BOMItemDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bomItemText2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_TEXT_2: fieldBuilder.buildEdmTypeField(
          'BOMItemText2',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link changeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChangeNumber',
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
        ALL_FIELDS: new AllFields('*', PoSubcontractingComponent)
      };
    }

    return this._schema;
  }
}
