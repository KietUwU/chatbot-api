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
import type { PurchaseOrderSupplierAddressApi } from './PurchaseOrderSupplierAddressApi';
import { PurchaseOrder, PurchaseOrderType } from './PurchaseOrder';

/**
 * This class represents the entity "PurchaseOrderSupplierAddress" of service "com.sap.gateway.srvd_a2x.api_purchaseorder_2.v0001".
 */
export class PurchaseOrderSupplierAddress<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderSupplierAddressType<T>
{
  /**
   * Technical entity name for PurchaseOrderSupplierAddress.
   */
  static override _entityName = 'PurchaseOrderSupplierAddress';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderSupplierAddress entity.
   */
  static _keys = ['SupplierAddressID', 'PurchaseOrder'];
  /**
   * Supplier Address Id.
   * Maximum length: 10.
   */
  declare supplierAddressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order.
   * Maximum length: 10.
   */
  declare purchaseOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Id.
   * Maximum length: 10.
   */
  declare addressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Person Id.
   * Maximum length: 10.
   */
  declare addressPersonId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Representation Code.
   * Maximum length: 1.
   */
  declare addressRepresentationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Correspondence Language.
   * Maximum length: 2.
   */
  declare correspondenceLanguage: DeserializedType<T, 'Edm.String'>;
  /**
   * Prfrd Comm Medium Type.
   * Maximum length: 3.
   */
  declare prfrdCommMediumType: DeserializedType<T, 'Edm.String'>;
  /**
   * Addressee Full Name.
   * Maximum length: 80.
   */
  declare addresseeFullName: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Name 1.
   * Maximum length: 40.
   */
  declare organizationName1: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Name 2.
   * Maximum length: 40.
   */
  declare organizationName2: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Name 3.
   * Maximum length: 40.
   */
  declare organizationName3: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Name 4.
   * Maximum length: 40.
   */
  declare organizationName4: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Search Term 1.
   * Maximum length: 20.
   */
  declare addressSearchTerm1: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Search Term 2.
   * Maximum length: 20.
   */
  declare addressSearchTerm2: DeserializedType<T, 'Edm.String'>;
  /**
   * City Name.
   * Maximum length: 40.
   */
  declare cityName: DeserializedType<T, 'Edm.String'>;
  /**
   * District Name.
   * Maximum length: 40.
   */
  declare districtName: DeserializedType<T, 'Edm.String'>;
  /**
   * Village Name.
   * Maximum length: 40.
   */
  declare villageName: DeserializedType<T, 'Edm.String'>;
  /**
   * Postal Code.
   * Maximum length: 10.
   */
  declare postalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Postal Code.
   * Maximum length: 10.
   */
  declare companyPostalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Street Name.
   * Maximum length: 60.
   */
  declare streetName: DeserializedType<T, 'Edm.String'>;
  /**
   * Street Prefix Name 1.
   * Maximum length: 40.
   */
  declare streetPrefixName1: DeserializedType<T, 'Edm.String'>;
  /**
   * Street Prefix Name 2.
   * Maximum length: 40.
   */
  declare streetPrefixName2: DeserializedType<T, 'Edm.String'>;
  /**
   * Street Suffix Name 1.
   * Maximum length: 40.
   */
  declare streetSuffixName1: DeserializedType<T, 'Edm.String'>;
  /**
   * Street Suffix Name 2.
   * Maximum length: 40.
   */
  declare streetSuffixName2: DeserializedType<T, 'Edm.String'>;
  /**
   * House Number.
   * Maximum length: 10.
   */
  declare houseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * House Number Supplement Text.
   * Maximum length: 10.
   */
  declare houseNumberSupplementText: DeserializedType<T, 'Edm.String'>;
  /**
   * Building.
   * Maximum length: 20.
   */
  declare building: DeserializedType<T, 'Edm.String'>;
  /**
   * Floor.
   * Maximum length: 10.
   */
  declare floor: DeserializedType<T, 'Edm.String'>;
  /**
   * Room Number.
   * Maximum length: 10.
   */
  declare roomNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Country.
   * Maximum length: 3.
   */
  declare country: DeserializedType<T, 'Edm.String'>;
  /**
   * Region.
   * Maximum length: 3.
   */
  declare region: DeserializedType<T, 'Edm.String'>;
  /**
   * Form Of Address.
   * Maximum length: 4.
   */
  declare formOfAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Jurisdiction.
   * Maximum length: 15.
   */
  declare taxJurisdiction: DeserializedType<T, 'Edm.String'>;
  /**
   * Transport Zone.
   * Maximum length: 10.
   */
  declare transportZone: DeserializedType<T, 'Edm.String'>;
  /**
   * Po Box.
   * Maximum length: 10.
   */
  declare poBox: DeserializedType<T, 'Edm.String'>;
  /**
   * Po Box Is Without Number.
   */
  declare poBoxIsWithoutNumber: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Po Box Postal Code.
   * Maximum length: 10.
   */
  declare poBoxPostalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Po Box Lobby Name.
   * Maximum length: 40.
   */
  declare poBoxLobbyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Po Box Deviating City Name.
   * Maximum length: 40.
   */
  declare poBoxDeviatingCityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Po Box Deviating Region.
   * Maximum length: 3.
   */
  declare poBoxDeviatingRegion: DeserializedType<T, 'Edm.String'>;
  /**
   * Po Box Deviating Country.
   * Maximum length: 3.
   */
  declare poBoxDeviatingCountry: DeserializedType<T, 'Edm.String'>;
  /**
   * Care Of Name.
   * Maximum length: 40.
   */
  declare careOfName: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Service Type Code.
   * Maximum length: 4.
   */
  declare deliveryServiceTypeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Service Number.
   * Maximum length: 10.
   */
  declare deliveryServiceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Time Zone.
   * Maximum length: 6.
   */
  declare addressTimeZone: DeserializedType<T, 'Edm.String'>;
  /**
   * Email Address.
   * Maximum length: 241.
   */
  declare emailAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Regional Structure Check Status.
   * Maximum length: 1.
   */
  declare regionalStructureCheckStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link PurchaseOrder} entity.
   */
  declare purchaseOrderTp?: PurchaseOrder<T> | null;

  constructor(_entityApi: PurchaseOrderSupplierAddressApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderSupplierAddressType<
  T extends DeSerializers = DefaultDeSerializers
> {
  supplierAddressId: DeserializedType<T, 'Edm.String'>;
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  addressId: DeserializedType<T, 'Edm.String'>;
  addressPersonId: DeserializedType<T, 'Edm.String'>;
  addressRepresentationCode: DeserializedType<T, 'Edm.String'>;
  correspondenceLanguage: DeserializedType<T, 'Edm.String'>;
  prfrdCommMediumType: DeserializedType<T, 'Edm.String'>;
  addresseeFullName: DeserializedType<T, 'Edm.String'>;
  organizationName1: DeserializedType<T, 'Edm.String'>;
  organizationName2: DeserializedType<T, 'Edm.String'>;
  organizationName3: DeserializedType<T, 'Edm.String'>;
  organizationName4: DeserializedType<T, 'Edm.String'>;
  addressSearchTerm1: DeserializedType<T, 'Edm.String'>;
  addressSearchTerm2: DeserializedType<T, 'Edm.String'>;
  cityName: DeserializedType<T, 'Edm.String'>;
  districtName: DeserializedType<T, 'Edm.String'>;
  villageName: DeserializedType<T, 'Edm.String'>;
  postalCode: DeserializedType<T, 'Edm.String'>;
  companyPostalCode: DeserializedType<T, 'Edm.String'>;
  streetName: DeserializedType<T, 'Edm.String'>;
  streetPrefixName1: DeserializedType<T, 'Edm.String'>;
  streetPrefixName2: DeserializedType<T, 'Edm.String'>;
  streetSuffixName1: DeserializedType<T, 'Edm.String'>;
  streetSuffixName2: DeserializedType<T, 'Edm.String'>;
  houseNumber: DeserializedType<T, 'Edm.String'>;
  houseNumberSupplementText: DeserializedType<T, 'Edm.String'>;
  building: DeserializedType<T, 'Edm.String'>;
  floor: DeserializedType<T, 'Edm.String'>;
  roomNumber: DeserializedType<T, 'Edm.String'>;
  country: DeserializedType<T, 'Edm.String'>;
  region: DeserializedType<T, 'Edm.String'>;
  formOfAddress: DeserializedType<T, 'Edm.String'>;
  taxJurisdiction: DeserializedType<T, 'Edm.String'>;
  transportZone: DeserializedType<T, 'Edm.String'>;
  poBox: DeserializedType<T, 'Edm.String'>;
  poBoxIsWithoutNumber: DeserializedType<T, 'Edm.Boolean'>;
  poBoxPostalCode: DeserializedType<T, 'Edm.String'>;
  poBoxLobbyName: DeserializedType<T, 'Edm.String'>;
  poBoxDeviatingCityName: DeserializedType<T, 'Edm.String'>;
  poBoxDeviatingRegion: DeserializedType<T, 'Edm.String'>;
  poBoxDeviatingCountry: DeserializedType<T, 'Edm.String'>;
  careOfName: DeserializedType<T, 'Edm.String'>;
  deliveryServiceTypeCode: DeserializedType<T, 'Edm.String'>;
  deliveryServiceNumber: DeserializedType<T, 'Edm.String'>;
  addressTimeZone: DeserializedType<T, 'Edm.String'>;
  emailAddress: DeserializedType<T, 'Edm.String'>;
  regionalStructureCheckStatus: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  purchaseOrderTp?: PurchaseOrderType<T> | null;
}
