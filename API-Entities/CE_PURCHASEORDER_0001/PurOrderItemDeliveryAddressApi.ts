/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurOrderItemDeliveryAddress } from './PurOrderItemDeliveryAddress';
import { PurOrderItemDeliveryAddressRequestBuilder } from './PurOrderItemDeliveryAddressRequestBuilder';
import { PurchaseOrderApi } from './PurchaseOrderApi';
import { PurchaseOrderItemApi } from './PurchaseOrderItemApi';
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
export class PurOrderItemDeliveryAddressApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurOrderItemDeliveryAddress<DeSerializersT>, DeSerializersT>
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
  ): PurOrderItemDeliveryAddressApi<DeSerializersT> {
    return new PurOrderItemDeliveryAddressApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrder_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_1: OneToOneLink<
      PurOrderItemDeliveryAddress<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderItem_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_1: OneToOneLink<
      PurOrderItemDeliveryAddress<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseOrderApi<DeSerializersT>,
      PurchaseOrderItemApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_ORDER_1: new OneToOneLink('_PurchaseOrder', this, linkedApis[0]),
      PURCHASE_ORDER_ITEM_1: new OneToOneLink(
        '_PurchaseOrderItem',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PurOrderItemDeliveryAddress;

  requestBuilder(): PurOrderItemDeliveryAddressRequestBuilder<DeSerializersT> {
    return new PurOrderItemDeliveryAddressRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurOrderItemDeliveryAddress<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurOrderItemDeliveryAddress<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurOrderItemDeliveryAddress<DeSerializersT>,
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
    typeof PurOrderItemDeliveryAddress,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurOrderItemDeliveryAddress,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCHASE_ORDER: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_ADDRESS_ID: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_ID: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_PERSON_ID: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_REPRESENTATION_CODE: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CORRESPONDENCE_LANGUAGE: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRFRD_COMM_MEDIUM_TYPE: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESSEE_FULL_NAME: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME_1: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME_2: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME_3: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME_4: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_SEARCH_TERM_1: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_SEARCH_TERM_2: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CITY_NAME: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VILLAGE_NAME: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTAL_CODE: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY_POSTAL_CODE: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_NAME: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_PREFIX_NAME_1: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_PREFIX_NAME_2: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_SUFFIX_NAME_1: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_SUFFIX_NAME_2: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOUSE_NUMBER: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOUSE_NUMBER_SUPPLEMENT_TEXT: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUILDING: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FLOOR: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROOM_NUMBER: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGION: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORM_OF_ADDRESS: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_JURISDICTION: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSPORT_ZONE: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX_IS_WITHOUT_NUMBER: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PO_BOX_POSTAL_CODE: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX_LOBBY_NAME: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX_DEVIATING_CITY_NAME: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX_DEVIATING_REGION: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PO_BOX_DEVIATING_COUNTRY: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARE_OF_NAME: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_SERVICE_TYPE_CODE: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_SERVICE_NUMBER: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_TIME_ZONE: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMAIL_ADDRESS: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGIONAL_STRUCTURE_CHECK_STATUS: OrderableEdmTypeField<
      PurOrderItemDeliveryAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      PurOrderItemDeliveryAddress<DeSerializers>,
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
      PurOrderItemDeliveryAddress<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderItem_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_ITEM_1: OneToOneLink<
      PurOrderItemDeliveryAddress<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurOrderItemDeliveryAddress<DeSerializers>>;
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
         * Static representation of the {@link deliveryAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressID',
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
        ALL_FIELDS: new AllFields('*', PurOrderItemDeliveryAddress)
      };
    }

    return this._schema;
  }
}
