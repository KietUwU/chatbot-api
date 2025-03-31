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
import type { PurchaseOrderNoteApi } from './PurchaseOrderNoteApi';
import { PurchaseOrder, PurchaseOrderType } from './PurchaseOrder';

/**
 * This class represents the entity "PurchaseOrderNote" of service "com.sap.gateway.srvd_a2x.api_purchaseorder_2.v0001".
 */
export class PurchaseOrderNote<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PurchaseOrderNoteType<T>
{
  /**
   * Technical entity name for PurchaseOrderNote.
   */
  static override _entityName = 'PurchaseOrderNote';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderNote entity.
   */
  static _keys = ['PurchaseOrder', 'TextObjectType', 'Language'];
  /**
   * Purchase Order.
   * Maximum length: 10.
   */
  declare purchaseOrder: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link PurchaseOrder} entity.
   */
  declare purchaseOrder_1?: PurchaseOrder<T> | null;

  constructor(_entityApi: PurchaseOrderNoteApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderNoteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  textObjectType: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  plainLongText: DeserializedType<T, 'Edm.String'>;
  purchaseOrder_1?: PurchaseOrderType<T> | null;
}
