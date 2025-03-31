/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderSupplierAddress } from './PurchaseOrderSupplierAddress';
import { PurchaseOrderSupplierAddressRequestBuilder } from './PurchaseOrderSupplierAddressRequestBuilder';
import { PurchaseOrderApi } from './PurchaseOrderApi';
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
  OrderableEdmTypeField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseOrderSupplierAddressApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseOrderSupplierAddress<DeSerializersT>, DeSerializersT>
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
  ): PurchaseOrderSupplierAddressApi<DeSerializersT> {
    return new PurchaseOrderSupplierAddressApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderTp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_TP: OneToOneLink<
      PurchaseOrderSupplierAddress<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PurchaseOrderApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_ORDER_TP: new OneToOneLink(
        '_PurchaseOrderTP',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PurchaseOrderSupplierAddress;

  requestBuilder(): PurchaseOrderSupplierAddressRequestBuilder<DeSerializersT> {
    return new PurchaseOrderSupplierAddressRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderSupplierAddress<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseOrderSupplierAddress<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseOrderSupplierAddress<DeSerializersT>,
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
    typeof PurchaseOrderSupplierAddress,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderSupplierAddress,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SUPPLIER_ADDRESS_ID: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_ID: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_PERSON_ID: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_REPRESENTATION_CODE: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CORRESPONDENCE_LANGUAGE: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRFRD_COMM_MEDIUM_TYPE: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESSEE_FULL_NAME: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME_1: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME_2: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME_3: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME_4: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_SEARCH_TERM_1: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_SEARCH_TERM_2: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CITY_NAME: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VILLAGE_NAME: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTAL_CODE: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY_POSTAL_CODE: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_NAME: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_PREFIX_NAME_1: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_PREFIX_NAME_2: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_SUFFIX_NAME_1: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_SUFFIX_NAME_2: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOUSE_NUMBER: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOUSE_NUMBER_SUPPLEMENT_TEXT: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUILDING: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FLOOR: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROOM_NUMBER: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGION: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORM_OF_ADDRESS: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_JURISDICTION: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSPORT_ZONE: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX_IS_WITHOUT_NUMBER: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PO_BOX_POSTAL_CODE: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX_LOBBY_NAME: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX_DEVIATING_CITY_NAME: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX_DEVIATING_REGION: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX_DEVIATING_COUNTRY: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARE_OF_NAME: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_SERVICE_TYPE_CODE: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_SERVICE_NUMBER: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_TIME_ZONE: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMAIL_ADDRESS: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGIONAL_STRUCTURE_CHECK_STATUS: OrderableEdmTypeField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      PurchaseOrderSupplierAddress<DeSerializers>,
      DeSerializersT,
      Sap_Message,
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderTp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_TP: OneToOneLink<
      PurchaseOrderSupplierAddress<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseOrderSupplierAddress<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link supplierAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'SupplierAddressID',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link addressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'AddressID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'AddressPersonID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressRepresentationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REPRESENTATION_CODE: fieldBuilder.buildEdmTypeField(
          'AddressRepresentationCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link correspondenceLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRESPONDENCE_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'CorrespondenceLanguage',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prfrdCommMediumType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRFRD_COMM_MEDIUM_TYPE: fieldBuilder.buildEdmTypeField(
          'PrfrdCommMediumType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addresseeFullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESSEE_FULL_NAME: fieldBuilder.buildEdmTypeField(
          'AddresseeFullName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME_1: fieldBuilder.buildEdmTypeField(
          'OrganizationName1',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME_2: fieldBuilder.buildEdmTypeField(
          'OrganizationName2',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationName3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME_3: fieldBuilder.buildEdmTypeField(
          'OrganizationName3',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationName4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME_4: fieldBuilder.buildEdmTypeField(
          'OrganizationName4',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressSearchTerm1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_SEARCH_TERM_1: fieldBuilder.buildEdmTypeField(
          'AddressSearchTerm1',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressSearchTerm2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_SEARCH_TERM_2: fieldBuilder.buildEdmTypeField(
          'AddressSearchTerm2',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_NAME: fieldBuilder.buildEdmTypeField(
          'CityName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link districtName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DistrictName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link villageName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VILLAGE_NAME: fieldBuilder.buildEdmTypeField(
          'VillageName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link postalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'PostalCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link companyPostalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyPostalCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link streetName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NAME: fieldBuilder.buildEdmTypeField(
          'StreetName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link streetPrefixName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_PREFIX_NAME_1: fieldBuilder.buildEdmTypeField(
          'StreetPrefixName1',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link streetPrefixName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_PREFIX_NAME_2: fieldBuilder.buildEdmTypeField(
          'StreetPrefixName2',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link streetSuffixName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_SUFFIX_NAME_1: fieldBuilder.buildEdmTypeField(
          'StreetSuffixName1',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link streetSuffixName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_SUFFIX_NAME_2: fieldBuilder.buildEdmTypeField(
          'StreetSuffixName2',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link houseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_NUMBER: fieldBuilder.buildEdmTypeField(
          'HouseNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link houseNumberSupplementText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_NUMBER_SUPPLEMENT_TEXT: fieldBuilder.buildEdmTypeField(
          'HouseNumberSupplementText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link building} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING: fieldBuilder.buildEdmTypeField(
          'Building',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link floor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLOOR: fieldBuilder.buildEdmTypeField('Floor', 'Edm.String', false),
        /**
         * Static representation of the {@link roomNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM_NUMBER: fieldBuilder.buildEdmTypeField(
          'RoomNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', false),
        /**
         * Static representation of the {@link region} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', false),
        /**
         * Static representation of the {@link formOfAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormOfAddress',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxJurisdiction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_JURISDICTION: fieldBuilder.buildEdmTypeField(
          'TaxJurisdiction',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transportZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_ZONE: fieldBuilder.buildEdmTypeField(
          'TransportZone',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link poBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX: fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', false),
        /**
         * Static representation of the {@link poBoxIsWithoutNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_IS_WITHOUT_NUMBER: fieldBuilder.buildEdmTypeField(
          'POBoxIsWithoutNumber',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link poBoxPostalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'POBoxPostalCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link poBoxLobbyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_LOBBY_NAME: fieldBuilder.buildEdmTypeField(
          'POBoxLobbyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link poBoxDeviatingCityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_DEVIATING_CITY_NAME: fieldBuilder.buildEdmTypeField(
          'POBoxDeviatingCityName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link poBoxDeviatingRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_DEVIATING_REGION: fieldBuilder.buildEdmTypeField(
          'POBoxDeviatingRegion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link poBoxDeviatingCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_DEVIATING_COUNTRY: fieldBuilder.buildEdmTypeField(
          'POBoxDeviatingCountry',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link careOfName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARE_OF_NAME: fieldBuilder.buildEdmTypeField(
          'CareOfName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryServiceTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_SERVICE_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryServiceTypeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryServiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_SERVICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryServiceNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEdmTypeField(
          'AddressTimeZone',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link emailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'EmailAddress',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link regionalStructureCheckStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGIONAL_STRUCTURE_CHECK_STATUS: fieldBuilder.buildEdmTypeField(
          'RegionalStructureCheckStatus',
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
        ALL_FIELDS: new AllFields('*', PurchaseOrderSupplierAddress)
      };
    }

    return this._schema;
  }
}
