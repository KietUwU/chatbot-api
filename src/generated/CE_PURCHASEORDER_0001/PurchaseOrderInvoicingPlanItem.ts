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
import type { PurchaseOrderInvoicingPlanItemApi } from './PurchaseOrderInvoicingPlanItemApi';
import { PurchaseOrder, PurchaseOrderType } from './PurchaseOrder';
import {
  PurchaseOrderInvoicingPlan,
  PurchaseOrderInvoicingPlanType
} from './PurchaseOrderInvoicingPlan';
import { PurchaseOrderItem, PurchaseOrderItemType } from './PurchaseOrderItem';

/**
 * This class represents the entity "PurchaseOrderInvoicingPlanItem" of service "com.sap.gateway.srvd_a2x.api_purchaseorder_2.v0001".
 */
export class PurchaseOrderInvoicingPlanItem<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderInvoicingPlanItemType<T>
{
  /**
   * Technical entity name for PurchaseOrderInvoicingPlanItem.
   */
  static override _entityName = 'PurchaseOrderInvoicingPlanItem';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderInvoicingPlanItem entity.
   */
  static _keys = [
    'PurchaseOrder',
    'PurchaseOrderItem',
    'InvoicingPlanItem',
    'InvoicingPlan'
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
   * Invoicing Plan Item.
   * Maximum length: 6.
   */
  declare invoicingPlanItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoicing Plan.
   * Maximum length: 10.
   */
  declare invoicingPlan: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoicing Plan Settlement From Dte.
   * @nullable
   */
  declare invoicingPlanSettlementFromDte?: DeserializedType<
    T,
    'Edm.Date'
  > | null;
  /**
   * Invoicing Plan Settlement To Dte.
   * @nullable
   */
  declare invoicingPlanSettlementToDte?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Invoicing Plan Invoicing Date.
   * @nullable
   */
  declare invoicingPlanInvoicingDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Invoicing Plan Amount.
   */
  declare invoicingPlanAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency.
   * Maximum length: 3.
   */
  declare transactionCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Organization.
   * Maximum length: 4.
   */
  declare purchasingOrganization: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Group.
   * Maximum length: 3.
   */
  declare purchasingGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Type.
   * Maximum length: 4.
   */
  declare purchaseOrderType: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link PurchaseOrder} entity.
   */
  declare purchaseOrder_1?: PurchaseOrder<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderInvoicingPlan} entity.
   */
  declare purchaseOrderInvoicingPlan?: PurchaseOrderInvoicingPlan<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderItem} entity.
   */
  declare purchaseOrderItem_1?: PurchaseOrderItem<T> | null;

  constructor(_entityApi: PurchaseOrderInvoicingPlanItemApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderInvoicingPlanItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  purchaseOrderItem: DeserializedType<T, 'Edm.String'>;
  invoicingPlanItem: DeserializedType<T, 'Edm.String'>;
  invoicingPlan: DeserializedType<T, 'Edm.String'>;
  invoicingPlanSettlementFromDte?: DeserializedType<T, 'Edm.Date'> | null;
  invoicingPlanSettlementToDte?: DeserializedType<T, 'Edm.Date'> | null;
  invoicingPlanInvoicingDate?: DeserializedType<T, 'Edm.Date'> | null;
  invoicingPlanAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrency: DeserializedType<T, 'Edm.String'>;
  purchasingOrganization: DeserializedType<T, 'Edm.String'>;
  purchasingGroup: DeserializedType<T, 'Edm.String'>;
  purchaseOrderType: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  purchaseOrder_1?: PurchaseOrderType<T> | null;
  purchaseOrderInvoicingPlan?: PurchaseOrderInvoicingPlanType<T> | null;
  purchaseOrderItem_1?: PurchaseOrderItemType<T> | null;
}
