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
import type { PurchaseOrderApi } from './PurchaseOrderApi';
import { PurchaseOrderItem, PurchaseOrderItemType } from './PurchaseOrderItem';
import { PurchaseOrderNote, PurchaseOrderNoteType } from './PurchaseOrderNote';
import {
  PurchaseOrderPartner,
  PurchaseOrderPartnerType
} from './PurchaseOrderPartner';
import {
  PurchaseOrderSupplierAddress,
  PurchaseOrderSupplierAddressType
} from './PurchaseOrderSupplierAddress';

/**
 * This class represents the entity "PurchaseOrder" of service "com.sap.gateway.srvd_a2x.api_purchaseorder_2.v0001".
 */
export class PurchaseOrder<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PurchaseOrderType<T>
{
  /**
   * Technical entity name for PurchaseOrder.
   */
  static override _entityName = 'PurchaseOrder';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrder entity.
   */
  static _keys = ['PurchaseOrder'];
  /**
   * Purchase Order.
   * Maximum length: 10.
   */
  declare purchaseOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Type.
   * Maximum length: 4.
   */
  declare purchaseOrderType: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Subtype.
   * Maximum length: 1.
   */
  declare purchaseOrderSubtype: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Document Origin.
   * Maximum length: 1.
   */
  declare purchasingDocumentOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Document Process Code.
   * Maximum length: 3.
   */
  declare purchasingDocumentProcessCode: DeserializedType<T, 'Edm.String'>;
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
   * Purchase Order Date.
   * @nullable
   */
  declare purchaseOrderDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Last Change Date Time.
   * @nullable
   */
  declare lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Validity Start Date.
   * @nullable
   */
  declare validityStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Validity End Date.
   * @nullable
   */
  declare validityEndDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Language.
   * Maximum length: 2.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Deletion Code.
   * Maximum length: 1.
   */
  declare purchaseOrderDeletionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Release Is Not Completed.
   */
  declare releaseIsNotCompleted: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Purchasing Completeness Status.
   */
  declare purchasingCompletenessStatus: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Purchasing Processing Status.
   * Maximum length: 2.
   */
  declare purchasingProcessingStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Purg Release Sequence Status.
   * Maximum length: 8.
   */
  declare purgReleaseSequenceStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Release Code.
   * Maximum length: 1.
   */
  declare releaseCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Release Strategy.
   * Maximum length: 2.
   */
  declare purchasingReleaseStrategy: DeserializedType<T, 'Edm.String'>;
  /**
   * Purg Reason For Doc Cancellation.
   * Maximum length: 2.
   */
  declare purgReasonForDocCancellation: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code.
   * Maximum length: 4.
   */
  declare companyCode: DeserializedType<T, 'Edm.String'>;
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
   * Supplier.
   * Maximum length: 10.
   */
  declare supplier: DeserializedType<T, 'Edm.String'>;
  /**
   * Manual Supplier Address Id.
   * Maximum length: 10.
   */
  declare manualSupplierAddressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Address Id.
   * Maximum length: 10.
   */
  declare supplierAddressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Resp Sales Person Name.
   * Maximum length: 30.
   */
  declare supplierRespSalesPersonName: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Phone Number.
   * Maximum length: 16.
   */
  declare supplierPhoneNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplying Supplier.
   * Maximum length: 10.
   */
  declare supplyingSupplier: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplying Plant.
   * Maximum length: 4.
   */
  declare supplyingPlant: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoicing Party.
   * Maximum length: 10.
   */
  declare invoicingParty: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer.
   * Maximum length: 10.
   */
  declare customer: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Contract.
   * Maximum length: 10.
   */
  declare purchaseContract: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Quotation External Id.
   * Maximum length: 10.
   */
  declare supplierQuotationExternalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quotation Submission Date.
   * @nullable
   */
  declare quotationSubmissionDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Item Number Interval For Sub Items.
   * Maximum length: 5.
   */
  declare itemNumberIntervalForSubItems: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Terms.
   * Maximum length: 4.
   */
  declare paymentTerms: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Discount 1 Days.
   */
  declare cashDiscount1Days: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Discount 2 Days.
   */
  declare cashDiscount2Days: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Payment Days.
   */
  declare netPaymentDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Discount 1 Percent.
   */
  declare cashDiscount1Percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Discount 2 Percent.
   */
  declare cashDiscount2Percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Down Payment Type.
   * Maximum length: 4.
   */
  declare downPaymentType: DeserializedType<T, 'Edm.String'>;
  /**
   * Down Payment Percentage Of Tot Amt.
   */
  declare downPaymentPercentageOfTotAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Down Payment Amount.
   */
  declare downPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Down Payment Due Date.
   * @nullable
   */
  declare downPaymentDueDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Incoterms Classification.
   * Maximum length: 3.
   */
  declare incotermsClassification: DeserializedType<T, 'Edm.String'>;
  /**
   * Incoterms Transfer Location.
   * Maximum length: 28.
   */
  declare incotermsTransferLocation: DeserializedType<T, 'Edm.String'>;
  /**
   * Incoterms Version.
   * Maximum length: 4.
   */
  declare incotermsVersion: DeserializedType<T, 'Edm.String'>;
  /**
   * Incoterms Location 1.
   * Maximum length: 70.
   */
  declare incotermsLocation1: DeserializedType<T, 'Edm.String'>;
  /**
   * Incoterms Location 2.
   * Maximum length: 70.
   */
  declare incotermsLocation2: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Intrastat Reporting Relevant.
   */
  declare isIntrastatReportingRelevant: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Intrastat Reporting Excluded.
   */
  declare isIntrastatReportingExcluded: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Correspnc External Reference.
   * Maximum length: 12.
   */
  declare correspncExternalReference: DeserializedType<T, 'Edm.String'>;
  /**
   * Correspnc Internal Reference.
   * Maximum length: 12.
   */
  declare correspncInternalReference: DeserializedType<T, 'Edm.String'>;
  /**
   * Pricing Document.
   * Maximum length: 10.
   */
  declare pricingDocument: DeserializedType<T, 'Edm.String'>;
  /**
   * Pricing Procedure.
   * Maximum length: 6.
   */
  declare pricingProcedure: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Currency.
   * Maximum length: 3.
   */
  declare documentCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate Is Fixed.
   */
  declare exchangeRateIsFixed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Tax Return Country.
   * Maximum length: 3.
   */
  declare taxReturnCountry: DeserializedType<T, 'Edm.String'>;
  /**
   * Vat Registration Country.
   * Maximum length: 3.
   */
  declare vatRegistrationCountry: DeserializedType<T, 'Edm.String'>;
  /**
   * Purg Aggrgd Prod Cmplnc Suplr Sts.
   * Maximum length: 1.
   */
  declare purgAggrgdProdCmplncSuplrSts: DeserializedType<T, 'Edm.String'>;
  /**
   * Purg Aggrgd Prod Marketability Sts.
   * Maximum length: 1.
   */
  declare purgAggrgdProdMarketabilitySts: DeserializedType<T, 'Edm.String'>;
  /**
   * Purg Aggrgd Sfty Data Sheet Status.
   * Maximum length: 1.
   */
  declare purgAggrgdSftyDataSheetStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Purg Prod Cmplnc Tot Dngrs Goods Sts.
   * Maximum length: 1.
   */
  declare purgProdCmplncTotDngrsGoodsSts: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Collective Number.
   * Maximum length: 10.
   */
  declare purchasingCollectiveNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderItem} entity.
   */
  declare purchaseOrderItem: PurchaseOrderItem<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderNote} entity.
   */
  declare purchaseOrderNote: PurchaseOrderNote<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderPartner} entity.
   */
  declare purchaseOrderPartner: PurchaseOrderPartner<T>[];
  /**
   * One-to-one navigation property to the {@link PurchaseOrderSupplierAddress} entity.
   */
  declare supplierAddress?: PurchaseOrderSupplierAddress<T> | null;

  constructor(_entityApi: PurchaseOrderApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  purchaseOrderType: DeserializedType<T, 'Edm.String'>;
  purchaseOrderSubtype: DeserializedType<T, 'Edm.String'>;
  purchasingDocumentOrigin: DeserializedType<T, 'Edm.String'>;
  purchasingDocumentProcessCode: DeserializedType<T, 'Edm.String'>;
  createdByUser: DeserializedType<T, 'Edm.String'>;
  creationDate?: DeserializedType<T, 'Edm.Date'> | null;
  purchaseOrderDate?: DeserializedType<T, 'Edm.Date'> | null;
  lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.Date'> | null;
  language: DeserializedType<T, 'Edm.String'>;
  purchaseOrderDeletionCode: DeserializedType<T, 'Edm.String'>;
  releaseIsNotCompleted: DeserializedType<T, 'Edm.Boolean'>;
  purchasingCompletenessStatus: DeserializedType<T, 'Edm.Boolean'>;
  purchasingProcessingStatus: DeserializedType<T, 'Edm.String'>;
  purgReleaseSequenceStatus: DeserializedType<T, 'Edm.String'>;
  releaseCode: DeserializedType<T, 'Edm.String'>;
  purchasingReleaseStrategy: DeserializedType<T, 'Edm.String'>;
  purgReasonForDocCancellation: DeserializedType<T, 'Edm.String'>;
  companyCode: DeserializedType<T, 'Edm.String'>;
  purchasingOrganization: DeserializedType<T, 'Edm.String'>;
  purchasingGroup: DeserializedType<T, 'Edm.String'>;
  supplier: DeserializedType<T, 'Edm.String'>;
  manualSupplierAddressId: DeserializedType<T, 'Edm.String'>;
  supplierAddressId: DeserializedType<T, 'Edm.String'>;
  supplierRespSalesPersonName: DeserializedType<T, 'Edm.String'>;
  supplierPhoneNumber: DeserializedType<T, 'Edm.String'>;
  supplyingSupplier: DeserializedType<T, 'Edm.String'>;
  supplyingPlant: DeserializedType<T, 'Edm.String'>;
  invoicingParty: DeserializedType<T, 'Edm.String'>;
  customer: DeserializedType<T, 'Edm.String'>;
  purchaseContract: DeserializedType<T, 'Edm.String'>;
  supplierQuotationExternalId: DeserializedType<T, 'Edm.String'>;
  quotationSubmissionDate?: DeserializedType<T, 'Edm.Date'> | null;
  itemNumberIntervalForSubItems: DeserializedType<T, 'Edm.String'>;
  paymentTerms: DeserializedType<T, 'Edm.String'>;
  cashDiscount1Days: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscount2Days: DeserializedType<T, 'Edm.Decimal'>;
  netPaymentDays: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscount1Percent: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscount2Percent: DeserializedType<T, 'Edm.Decimal'>;
  downPaymentType: DeserializedType<T, 'Edm.String'>;
  downPaymentPercentageOfTotAmt: DeserializedType<T, 'Edm.Decimal'>;
  downPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  downPaymentDueDate?: DeserializedType<T, 'Edm.Date'> | null;
  incotermsClassification: DeserializedType<T, 'Edm.String'>;
  incotermsTransferLocation: DeserializedType<T, 'Edm.String'>;
  incotermsVersion: DeserializedType<T, 'Edm.String'>;
  incotermsLocation1: DeserializedType<T, 'Edm.String'>;
  incotermsLocation2: DeserializedType<T, 'Edm.String'>;
  isIntrastatReportingRelevant: DeserializedType<T, 'Edm.Boolean'>;
  isIntrastatReportingExcluded: DeserializedType<T, 'Edm.Boolean'>;
  correspncExternalReference: DeserializedType<T, 'Edm.String'>;
  correspncInternalReference: DeserializedType<T, 'Edm.String'>;
  pricingDocument: DeserializedType<T, 'Edm.String'>;
  pricingProcedure: DeserializedType<T, 'Edm.String'>;
  documentCurrency: DeserializedType<T, 'Edm.String'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateIsFixed: DeserializedType<T, 'Edm.Boolean'>;
  taxReturnCountry: DeserializedType<T, 'Edm.String'>;
  vatRegistrationCountry: DeserializedType<T, 'Edm.String'>;
  purgAggrgdProdCmplncSuplrSts: DeserializedType<T, 'Edm.String'>;
  purgAggrgdProdMarketabilitySts: DeserializedType<T, 'Edm.String'>;
  purgAggrgdSftyDataSheetStatus: DeserializedType<T, 'Edm.String'>;
  purgProdCmplncTotDngrsGoodsSts: DeserializedType<T, 'Edm.String'>;
  purchasingCollectiveNumber: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  purchaseOrderItem: PurchaseOrderItemType<T>[];
  purchaseOrderNote: PurchaseOrderNoteType<T>[];
  purchaseOrderPartner: PurchaseOrderPartnerType<T>[];
  supplierAddress?: PurchaseOrderSupplierAddressType<T> | null;
}
