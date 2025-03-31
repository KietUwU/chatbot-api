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
import type { PoSubcontractingComponentApi } from './PoSubcontractingComponentApi';
import { PurchaseOrder, PurchaseOrderType } from './PurchaseOrder';
import { PurchaseOrderItem, PurchaseOrderItemType } from './PurchaseOrderItem';
import {
  PurchaseOrderScheduleLine,
  PurchaseOrderScheduleLineType
} from './PurchaseOrderScheduleLine';

/**
 * This class represents the entity "POSubcontractingComponent" of service "com.sap.gateway.srvd_a2x.api_purchaseorder_2.v0001".
 */
export class PoSubcontractingComponent<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PoSubcontractingComponentType<T>
{
  /**
   * Technical entity name for PoSubcontractingComponent.
   */
  static override _entityName = 'POSubcontractingComponent';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PoSubcontractingComponent entity.
   */
  static _keys = [
    'PurchaseOrder',
    'PurchaseOrderItem',
    'ScheduleLine',
    'ReservationItem',
    'RecordType'
  ];
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
   * Reservation Item.
   * Maximum length: 4.
   */
  declare reservationItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Type.
   * Maximum length: 1.
   */
  declare recordType: DeserializedType<T, 'Edm.String'>;
  /**
   * Material.
   * Maximum length: 18.
   */
  declare material: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Material Provision.
   */
  declare isMaterialProvision: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Material Provision Type.
   * Maximum length: 1.
   */
  declare materialProvisionType: DeserializedType<T, 'Edm.String'>;
  /**
   * Material Qty To Base Qty Nmrtr.
   */
  declare materialQtyToBaseQtyNmrtr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Material Qty To Base Qty Dnmntr.
   */
  declare materialQtyToBaseQtyDnmntr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Material Revision Level.
   * Maximum length: 2.
   */
  declare materialRevisionLevel: DeserializedType<T, 'Edm.String'>;
  /**
   * Material Comp Is Variable Sized.
   */
  declare materialCompIsVariableSized: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Material Component Is Phantom Item.
   */
  declare materialComponentIsPhantomItem: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Reservation.
   * Maximum length: 10.
   */
  declare reservation: DeserializedType<T, 'Edm.String'>;
  /**
   * Required Quantity.
   */
  declare requiredQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requirement Date.
   * @nullable
   */
  declare requirementDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Requirement Time.
   */
  declare requirementTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  /**
   * Reservation Is Finally Issued.
   */
  declare reservationIsFinallyIssued: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Base Unit.
   * Maximum length: 3.
   */
  declare baseUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity In Entry Unit.
   */
  declare quantityInEntryUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Entry Unit.
   * Maximum length: 3.
   */
  declare entryUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Variable Size Item Quantity.
   */
  declare variableSizeItemQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Variable Size Item Unit.
   * Maximum length: 3.
   */
  declare variableSizeItemUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Variable Size Component Unit.
   * Maximum length: 3.
   */
  declare variableSizeComponentUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Variable Size Component Quantity.
   */
  declare variableSizeComponentQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Of Measure For Size 1 To 3.
   * Maximum length: 3.
   */
  declare unitOfMeasureForSize1To3: DeserializedType<T, 'Edm.String'>;
  /**
   * Size 1.
   */
  declare size1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Size 2.
   */
  declare size2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Size 3.
   */
  declare size3: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Latest Requirement Date.
   * @nullable
   */
  declare latestRequirementDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Order Level Value.
   * Maximum length: 2.
   */
  declare orderLevelValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Path Value.
   * Maximum length: 2.
   */
  declare orderPathValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Bill Of Material Item Number.
   * Maximum length: 4.
   */
  declare billOfMaterialItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Matl Comp Free Defined Attribute.
   * Maximum length: 10.
   */
  declare matlCompFreeDefinedAttribute: DeserializedType<T, 'Edm.String'>;
  /**
   * Bom Item Category.
   * Maximum length: 1.
   */
  declare bomItemCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Bulk Material Component.
   */
  declare isBulkMaterialComponent: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Account Assignment Category.
   * Maximum length: 1.
   */
  declare accountAssignmentCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Special Stock Type.
   * Maximum length: 1.
   */
  declare inventorySpecialStockType: DeserializedType<T, 'Edm.String'>;
  /**
   * Consumption Posting.
   * Maximum length: 1.
   */
  declare consumptionPosting: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Special Stock Valn Type.
   * Maximum length: 1.
   */
  declare inventorySpecialStockValnType: DeserializedType<T, 'Edm.String'>;
  /**
   * Debit Credit Code.
   * Maximum length: 1.
   */
  declare debitCreditCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Withdrawn Quantity.
   */
  declare withdrawnQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Is Fixed.
   */
  declare quantityIsFixed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Component Scrap In Percent.
   */
  declare componentScrapInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operation Scrap In Percent.
   */
  declare operationScrapInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Net Scrap.
   */
  declare isNetScrap: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Lead Time Offset.
   */
  declare leadTimeOffset: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Distribution Key.
   * Maximum length: 4.
   */
  declare quantityDistributionKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Formula Key.
   * Maximum length: 2.
   */
  declare formulaKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Location.
   * Maximum length: 4.
   */
  declare storageLocation: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Supply Area.
   * Maximum length: 10.
   */
  declare productionSupplyArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Batch.
   * Maximum length: 10.
   */
  declare batch: DeserializedType<T, 'Edm.String'>;
  /**
   * Bom Item Description.
   * Maximum length: 40.
   */
  declare bomItemDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Bom Item Text 2.
   * Maximum length: 40.
   */
  declare bomItemText2: DeserializedType<T, 'Edm.String'>;
  /**
   * Change Number.
   * Maximum length: 12.
   */
  declare changeNumber: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link PurchaseOrderScheduleLine} entity.
   */
  declare scheduleLine_1?: PurchaseOrderScheduleLine<T> | null;

  constructor(_entityApi: PoSubcontractingComponentApi<T>) {
    super(_entityApi);
  }
}

export interface PoSubcontractingComponentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  purchaseOrderItem: DeserializedType<T, 'Edm.String'>;
  scheduleLine: DeserializedType<T, 'Edm.String'>;
  reservationItem: DeserializedType<T, 'Edm.String'>;
  recordType: DeserializedType<T, 'Edm.String'>;
  material: DeserializedType<T, 'Edm.String'>;
  isMaterialProvision: DeserializedType<T, 'Edm.Boolean'>;
  materialProvisionType: DeserializedType<T, 'Edm.String'>;
  materialQtyToBaseQtyNmrtr: DeserializedType<T, 'Edm.Decimal'>;
  materialQtyToBaseQtyDnmntr: DeserializedType<T, 'Edm.Decimal'>;
  materialRevisionLevel: DeserializedType<T, 'Edm.String'>;
  materialCompIsVariableSized: DeserializedType<T, 'Edm.Boolean'>;
  materialComponentIsPhantomItem: DeserializedType<T, 'Edm.Boolean'>;
  reservation: DeserializedType<T, 'Edm.String'>;
  requiredQuantity: DeserializedType<T, 'Edm.Decimal'>;
  requirementDate?: DeserializedType<T, 'Edm.Date'> | null;
  requirementTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  reservationIsFinallyIssued: DeserializedType<T, 'Edm.Boolean'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  quantityInEntryUnit: DeserializedType<T, 'Edm.Decimal'>;
  entryUnit: DeserializedType<T, 'Edm.String'>;
  variableSizeItemQuantity: DeserializedType<T, 'Edm.Decimal'>;
  variableSizeItemUnit: DeserializedType<T, 'Edm.String'>;
  variableSizeComponentUnit: DeserializedType<T, 'Edm.String'>;
  variableSizeComponentQuantity: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasureForSize1To3: DeserializedType<T, 'Edm.String'>;
  size1: DeserializedType<T, 'Edm.Decimal'>;
  size2: DeserializedType<T, 'Edm.Decimal'>;
  size3: DeserializedType<T, 'Edm.Decimal'>;
  plant: DeserializedType<T, 'Edm.String'>;
  latestRequirementDate?: DeserializedType<T, 'Edm.Date'> | null;
  orderLevelValue: DeserializedType<T, 'Edm.String'>;
  orderPathValue: DeserializedType<T, 'Edm.String'>;
  billOfMaterialItemNumber: DeserializedType<T, 'Edm.String'>;
  matlCompFreeDefinedAttribute: DeserializedType<T, 'Edm.String'>;
  bomItemCategory: DeserializedType<T, 'Edm.String'>;
  isBulkMaterialComponent: DeserializedType<T, 'Edm.Boolean'>;
  accountAssignmentCategory: DeserializedType<T, 'Edm.String'>;
  inventorySpecialStockType: DeserializedType<T, 'Edm.String'>;
  consumptionPosting: DeserializedType<T, 'Edm.String'>;
  inventorySpecialStockValnType: DeserializedType<T, 'Edm.String'>;
  debitCreditCode: DeserializedType<T, 'Edm.String'>;
  withdrawnQuantity: DeserializedType<T, 'Edm.Decimal'>;
  quantityIsFixed: DeserializedType<T, 'Edm.Boolean'>;
  componentScrapInPercent: DeserializedType<T, 'Edm.Decimal'>;
  operationScrapInPercent: DeserializedType<T, 'Edm.Decimal'>;
  isNetScrap: DeserializedType<T, 'Edm.Boolean'>;
  leadTimeOffset: DeserializedType<T, 'Edm.Decimal'>;
  quantityDistributionKey: DeserializedType<T, 'Edm.String'>;
  formulaKey: DeserializedType<T, 'Edm.String'>;
  storageLocation: DeserializedType<T, 'Edm.String'>;
  productionSupplyArea: DeserializedType<T, 'Edm.String'>;
  batch: DeserializedType<T, 'Edm.String'>;
  bomItemDescription: DeserializedType<T, 'Edm.String'>;
  bomItemText2: DeserializedType<T, 'Edm.String'>;
  changeNumber: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  purchaseOrder_1?: PurchaseOrderType<T> | null;
  purchaseOrderItem_1?: PurchaseOrderItemType<T> | null;
  scheduleLine_1?: PurchaseOrderScheduleLineType<T> | null;
}
