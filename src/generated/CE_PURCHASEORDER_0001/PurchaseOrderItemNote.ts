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
import type { PurchaseOrderItemNoteApi } from './PurchaseOrderItemNoteApi';
import { PurchaseOrder, PurchaseOrderType } from './PurchaseOrder';
import { PurchaseOrderItem, PurchaseOrderItemType } from './PurchaseOrderItem';

/**
 * This class represents the entity "PurchaseOrderItemNote" of service "com.sap.gateway.srvd_a2x.api_purchaseorder_2.v0001".
 */
export class PurchaseOrderItemNote<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderItemNoteType<T>
{
  /**
   * Technical entity name for PurchaseOrderItemNote.
   */
  static override _entityName = 'PurchaseOrderItemNote';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderItemNote entity.
   */
  static _keys = [
    'PurchaseOrder',
    'PurchaseOrderItem',
    'TextObjectType',
    'Language'
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
   * Text Object Type.
   * Maximum length: 4.
   */
  declare textObjectType: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   * Maximum length: 2.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Plain Long Text.
   */
  declare plainLongText: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Item Unique Id.
   * Maximum length: 15.
   */
  declare purchaseOrderItemUniqueId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link PurchaseOrder} entity.
   */
  declare purchaseOrder_1?: PurchaseOrder<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderItem} entity.
   */
  declare purchaseOrderItem_1?: PurchaseOrderItem<T> | null;

  constructor(_entityApi: PurchaseOrderItemNoteApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderItemNoteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  purchaseOrderItem: DeserializedType<T, 'Edm.String'>;
  textObjectType: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  plainLongText: DeserializedType<T, 'Edm.String'>;
  purchaseOrderItemUniqueId: DeserializedType<T, 'Edm.String'>;
  purchaseOrder_1?: PurchaseOrderType<T> | null;
  purchaseOrderItem_1?: PurchaseOrderItemType<T> | null;
}
