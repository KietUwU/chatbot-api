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
import type { PurchaseOrderPartnerApi } from './PurchaseOrderPartnerApi';
import { PurchaseOrder, PurchaseOrderType } from './PurchaseOrder';

/**
 * This class represents the entity "PurchaseOrderPartner" of service "com.sap.gateway.srvd_a2x.api_purchaseorder_2.v0001".
 */
export class PurchaseOrderPartner<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderPartnerType<T>
{
  /**
   * Technical entity name for PurchaseOrderPartner.
   */
  static override _entityName = 'PurchaseOrderPartner';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderPartner entity.
   */
  static _keys = ['PurchaseOrder', 'PartnerFunction'];
  /**
   * Purchase Order.
   * Maximum length: 10.
   */
  declare purchaseOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner Function.
   * Maximum length: 2.
   */
  declare partnerFunction: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Subrange.
   * Maximum length: 6.
   */
  declare supplierSubrange: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Organization.
   * Maximum length: 4.
   */
  declare purchasingOrganization: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner Counter.
   * Maximum length: 3.
   */
  declare partnerCounter: DeserializedType<T, 'Edm.String'>;
  /**
   * Created By User.
   * Maximum length: 12.
   */
  declare createdByUser: DeserializedType<T, 'Edm.String'>;
  /**
   * Creation Date.
   * @nullable
   */
  declare creationDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Purchasing Document Partner Type.
   * Maximum length: 2.
   */
  declare purchasingDocumentPartnerType: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier.
   * Maximum length: 10.
   */
  declare supplier: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Hierarchy Category.
   * Maximum length: 1.
   */
  declare supplierHierarchyCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Contact.
   * Maximum length: 10.
   */
  declare supplierContact: DeserializedType<T, 'Edm.String'>;
  /**
   * Person Work Agreement.
   * Maximum length: 8.
   */
  declare personWorkAgreement: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Internal Id.
   * Maximum length: 8.
   */
  declare employmentInternalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Partner.
   */
  declare defaultPartner: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link PurchaseOrder} entity.
   */
  declare purchaseOrderTp?: PurchaseOrder<T> | null;

  constructor(_entityApi: PurchaseOrderPartnerApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderPartnerType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  partnerFunction: DeserializedType<T, 'Edm.String'>;
  supplierSubrange: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  purchasingOrganization: DeserializedType<T, 'Edm.String'>;
  partnerCounter: DeserializedType<T, 'Edm.String'>;
  createdByUser: DeserializedType<T, 'Edm.String'>;
  creationDate?: DeserializedType<T, 'Edm.Date'> | null;
  purchasingDocumentPartnerType: DeserializedType<T, 'Edm.String'>;
  supplier: DeserializedType<T, 'Edm.String'>;
  supplierHierarchyCategory: DeserializedType<T, 'Edm.String'>;
  supplierContact: DeserializedType<T, 'Edm.String'>;
  personWorkAgreement: DeserializedType<T, 'Edm.String'>;
  employmentInternalId: DeserializedType<T, 'Edm.String'>;
  defaultPartner: DeserializedType<T, 'Edm.Boolean'>;
  sapMessages: Sap_Message<T>[];
  purchaseOrderTp?: PurchaseOrderType<T> | null;
}
