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
import type { PurchaseOrderInvoicingPlanApi } from './PurchaseOrderInvoicingPlanApi';
import {
  PurchaseOrderInvoicingPlanItem,
  PurchaseOrderInvoicingPlanItemType
} from './PurchaseOrderInvoicingPlanItem';
import { PurchaseOrder, PurchaseOrderType } from './PurchaseOrder';
import { PurchaseOrderItem, PurchaseOrderItemType } from './PurchaseOrderItem';

/**
 * This class represents the entity "PurchaseOrderInvoicingPlan" of service "com.sap.gateway.srvd_a2x.api_purchaseorder_2.v0001".
 */
export class PurchaseOrderInvoicingPlan<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderInvoicingPlanType<T>
{
  /**
   * Technical entity name for PurchaseOrderInvoicingPlan.
   */
  static override _entityName = 'PurchaseOrderInvoicingPlan';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderInvoicingPlan entity.
   */
  static _keys = ['PurchaseOrder', 'PurchaseOrderItem', 'InvoicingPlan'];
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
   * Invoicing Plan.
   * Maximum length: 10.
   */
  declare invoicingPlan: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoicing Plan Type.
   * Maximum length: 2.
   */
  declare invoicingPlanType: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoicing Plan Start Date.
   * @nullable
   */
  declare invoicingPlanStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Invoicing Plan End Date.
   * @nullable
   */
  declare invoicingPlanEndDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Invoicing Plan Next Invc Date Rule.
   * Maximum length: 2.
   */
  declare invoicingPlanNextInvcDateRule: DeserializedType<T, 'Edm.String'>;
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
   * One-to-many navigation property to the {@link PurchaseOrderInvoicingPlanItem} entity.
   */
  declare poInvoicingPlanItem: PurchaseOrderInvoicingPlanItem<T>[];
  /**
   * One-to-one navigation property to the {@link PurchaseOrder} entity.
   */
  declare purchaseOrder_1?: PurchaseOrder<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderItem} entity.
   */
  declare purchaseOrderItem_1?: PurchaseOrderItem<T> | null;

  constructor(_entityApi: PurchaseOrderInvoicingPlanApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderInvoicingPlanType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  purchaseOrderItem: DeserializedType<T, 'Edm.String'>;
  invoicingPlan: DeserializedType<T, 'Edm.String'>;
  invoicingPlanType: DeserializedType<T, 'Edm.String'>;
  invoicingPlanStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  invoicingPlanEndDate?: DeserializedType<T, 'Edm.Date'> | null;
  invoicingPlanNextInvcDateRule: DeserializedType<T, 'Edm.String'>;
  purchasingOrganization: DeserializedType<T, 'Edm.String'>;
  purchasingGroup: DeserializedType<T, 'Edm.String'>;
  purchaseOrderType: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  poInvoicingPlanItem: PurchaseOrderInvoicingPlanItemType<T>[];
  purchaseOrder_1?: PurchaseOrderType<T> | null;
  purchaseOrderItem_1?: PurchaseOrderItemType<T> | null;
}
