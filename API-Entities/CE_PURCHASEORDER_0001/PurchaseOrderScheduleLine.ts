/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { Sap_Message } from './Sap_Message';
import type { PurchaseOrderScheduleLineApi } from './PurchaseOrderScheduleLineApi';
import { PurchaseOrder, PurchaseOrderType } from './PurchaseOrder';
import { PurchaseOrderItem, PurchaseOrderItemType } from './PurchaseOrderItem';
import {
  PoSubcontractingComponent,
  PoSubcontractingComponentType
} from './PoSubcontractingComponent';

/**
 * This class represents the entity "PurchaseOrderScheduleLine" of service "com.sap.gateway.srvd_a2x.api_purchaseorder_2.v0001".
 */
export class PurchaseOrderScheduleLine<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderScheduleLineType<T>
{
  /**
   * Technical entity name for PurchaseOrderScheduleLine.
   */
  static override _entityName = 'PurchaseOrderScheduleLine';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderScheduleLine entity.
   */
  static _keys = ['PurchaseOrder', 'PurchaseOrderItem', 'ScheduleLine'];
  /**
   * Purchase Order.
   * Maximum length: 10.
   */
  declare purchaseOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Item.
   * Maximum length: 5.
   */
  declare purchaseOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Line.
   * Maximum length: 4.
   */
  declare scheduleLine: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Line Delivery Date.
   * @nullable
   */
  declare scheduleLineDeliveryDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Sched Line Stsc Delivery Date.
   * @nullable
   */
  declare schedLineStscDeliveryDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Performance Period Start Date.
   * @nullable
   */
  declare performancePeriodStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Performance Period End Date.
   * @nullable
   */
  declare performancePeriodEndDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Schedule Line Delivery Time.
   */
  declare scheduleLineDeliveryTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  /**
   * Batch.
   * Maximum length: 10.
   */
  declare batch: DeserializedType<T, 'Edm.String'>;
  /**
   * Batch By Supplier.
   * Maximum length: 15.
   */
  declare batchBySupplier: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Line Order Quantity.
   */
  declare scheduleLineOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Open Purchase Order Quantity.
   */
  declare openPurchaseOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Order Quantity Unit.
   * Maximum length: 3.
   */
  declare purchaseOrderQuantityUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   * Maximum length: 3.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Requisition.
   * Maximum length: 10.
   */
  declare purchaseRequisition: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Requisition Item.
   * Maximum length: 5.
   */
  declare purchaseRequisitionItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Deliv Date Category.
   * Maximum length: 1.
   */
  declare delivDateCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Line Order Date.
   * @nullable
   */
  declare scheduleLineOrderDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Product Availability Date.
   * @nullable
   */
  declare productAvailabilityDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Loading Date.
   * @nullable
   */
  declare loadingDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Loading Time.
   */
  declare loadingTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  /**
   * Transportation Planning Date.
   * @nullable
   */
  declare transportationPlanningDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Transportation Planning Time.
   */
  declare transportationPlanningTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  /**
   * Goods Issue Date.
   * @nullable
   */
  declare goodsIssueDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Goods Issue Time.
   */
  declare goodsIssueTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  /**
   * Route Schedule.
   * Maximum length: 10.
   */
  declare routeSchedule: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Availability Time.
   */
  declare productAvailabilityTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link PurchaseOrder} entity.
   */
  declare purchaseOrder_1?: PurchaseOrder<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderItem} entity.
   */
  declare purchaseOrderItem_1?: PurchaseOrderItem<T> | null;
  /**
   * One-to-many navigation property to the {@link PoSubcontractingComponent} entity.
   */
  declare subcontractingComponent: PoSubcontractingComponent<T>[];

  constructor(_entityApi: PurchaseOrderScheduleLineApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderScheduleLineType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  purchaseOrderItem: DeserializedType<T, 'Edm.String'>;
  scheduleLine: DeserializedType<T, 'Edm.String'>;
  scheduleLineDeliveryDate?: DeserializedType<T, 'Edm.Date'> | null;
  schedLineStscDeliveryDate?: DeserializedType<T, 'Edm.Date'> | null;
  performancePeriodStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  performancePeriodEndDate?: DeserializedType<T, 'Edm.Date'> | null;
  scheduleLineDeliveryTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  batch: DeserializedType<T, 'Edm.String'>;
  batchBySupplier: DeserializedType<T, 'Edm.String'>;
  scheduleLineOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  openPurchaseOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderQuantityUnit: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  purchaseRequisition: DeserializedType<T, 'Edm.String'>;
  purchaseRequisitionItem: DeserializedType<T, 'Edm.String'>;
  delivDateCategory: DeserializedType<T, 'Edm.String'>;
  scheduleLineOrderDate?: DeserializedType<T, 'Edm.Date'> | null;
  productAvailabilityDate?: DeserializedType<T, 'Edm.Date'> | null;
  loadingDate?: DeserializedType<T, 'Edm.Date'> | null;
  loadingTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  transportationPlanningDate?: DeserializedType<T, 'Edm.Date'> | null;
  transportationPlanningTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  goodsIssueDate?: DeserializedType<T, 'Edm.Date'> | null;
  goodsIssueTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  routeSchedule: DeserializedType<T, 'Edm.String'>;
  productAvailabilityTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  sapMessages: Sap_Message<T>[];
  purchaseOrder_1?: PurchaseOrderType<T> | null;
  purchaseOrderItem_1?: PurchaseOrderItemType<T> | null;
  subcontractingComponent: PoSubcontractingComponentType<T>[];
}
