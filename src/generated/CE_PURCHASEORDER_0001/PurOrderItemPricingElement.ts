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
import type { PurOrderItemPricingElementApi } from './PurOrderItemPricingElementApi';
import { PurchaseOrder, PurchaseOrderType } from './PurchaseOrder';
import { PurchaseOrderItem, PurchaseOrderItemType } from './PurchaseOrderItem';

/**
 * This class represents the entity "PurOrderItemPricingElement" of service "com.sap.gateway.srvd_a2x.api_purchaseorder_2.v0001".
 */
export class PurOrderItemPricingElement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurOrderItemPricingElementType<T>
{
  /**
   * Technical entity name for PurOrderItemPricingElement.
   */
  static override _entityName = 'PurOrderItemPricingElement';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurOrderItemPricingElement entity.
   */
  static _keys = [
    'PurchaseOrder',
    'PurchaseOrderItem',
    'PricingDocument',
    'PricingDocumentItem',
    'PricingProcedureStep',
    'PricingProcedureCounter'
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
   * Pricing Document.
   * Maximum length: 10.
   */
  declare pricingDocument: DeserializedType<T, 'Edm.String'>;
  /**
   * Pricing Document Item.
   * Maximum length: 6.
   */
  declare pricingDocumentItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Pricing Procedure Step.
   * Maximum length: 3.
   */
  declare pricingProcedureStep: DeserializedType<T, 'Edm.String'>;
  /**
   * Pricing Procedure Counter.
   * Maximum length: 3.
   */
  declare pricingProcedureCounter: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Application.
   * Maximum length: 2.
   */
  declare conditionApplication: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Type.
   * Maximum length: 4.
   */
  declare conditionType: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Condition Determination Dte.
   * @nullable
   */
  declare priceConditionDeterminationDte?: DeserializedType<
    T,
    'Edm.Date'
  > | null;
  /**
   * Condition Calculation Type.
   * Maximum length: 3.
   */
  declare conditionCalculationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Base Amount.
   */
  declare conditionBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition Base Value.
   */
  declare conditionBaseValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition Rate Amount.
   */
  declare conditionRateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition Rate Ratio.
   */
  declare conditionRateRatio: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition Rate Ratio Unit.
   * Maximum length: 3.
   */
  declare conditionRateRatioUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Currency.
   * Maximum length: 3.
   */
  declare conditionCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Detn Exchange Rate.
   */
  declare priceDetnExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition Quantity.
   */
  declare conditionQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition Quantity Unit.
   * Maximum length: 3.
   */
  declare conditionQuantityUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition To Base Qty Nmrtr.
   */
  declare conditionToBaseQtyNmrtr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition To Base Qty Dnmntr.
   */
  declare conditionToBaseQtyDnmntr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition Category.
   * Maximum length: 1.
   */
  declare conditionCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Is For Statistics.
   */
  declare conditionIsForStatistics: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Pricing Scale Type.
   * Maximum length: 1.
   */
  declare pricingScaleType: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Relevant For Accrual.
   */
  declare isRelevantForAccrual: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Cndn Is Relevant For Invoice List.
   */
  declare cndnIsRelevantForInvoiceList: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Condition Origin.
   * Maximum length: 1.
   */
  declare conditionOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Group Condition.
   */
  declare isGroupCondition: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Access Number Of Access Sequence.
   * Maximum length: 3.
   */
  declare accessNumberOfAccessSequence: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Record.
   * Maximum length: 10.
   */
  declare conditionRecord: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Sequential Number.
   * Maximum length: 3.
   */
  declare conditionSequentialNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Key For Gl Account.
   * Maximum length: 3.
   */
  declare accountKeyForGlAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Gl Account.
   * Maximum length: 10.
   */
  declare glAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code.
   * Maximum length: 2.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Acct Key For Accruals Gl Account.
   * Maximum length: 3.
   */
  declare acctKeyForAccrualsGlAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Accruals Gl Account.
   * Maximum length: 10.
   */
  declare accrualsGlAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Withholding Tax Code.
   * Maximum length: 2.
   */
  declare withholdingTaxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Freight Supplier.
   * Maximum length: 10.
   */
  declare freightSupplier: DeserializedType<T, 'Edm.String'>;
  /**
   * Cndn Rounding Off Diff Amount.
   */
  declare cndnRoundingOffDiffAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition Amount.
   */
  declare conditionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency.
   * Maximum length: 3.
   */
  declare transactionCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Control.
   * Maximum length: 1.
   */
  declare conditionControl: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Inactive Reason.
   * Maximum length: 1.
   */
  declare conditionInactiveReason: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Class.
   * Maximum length: 1.
   */
  declare conditionClass: DeserializedType<T, 'Edm.String'>;
  /**
   * Prcg Procedure Counter For Header.
   * Maximum length: 3.
   */
  declare prcgProcedureCounterForHeader: DeserializedType<T, 'Edm.String'>;
  /**
   * Factor For Condition Basis Value.
   */
  declare factorForConditionBasisValue: DeserializedType<T, 'Edm.Double'>;
  /**
   * Structure Condition.
   * Maximum length: 1.
   */
  declare structureCondition: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Factor For Cndn Basis Value.
   */
  declare periodFactorForCndnBasisValue: DeserializedType<T, 'Edm.Double'>;
  /**
   * Pricing Scale Basis.
   * Maximum length: 3.
   */
  declare pricingScaleBasis: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Scale Basis Value.
   */
  declare conditionScaleBasisValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition Scale Basis Unit.
   * Maximum length: 3.
   */
  declare conditionScaleBasisUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Scale Basis Currency.
   * Maximum length: 3.
   */
  declare conditionScaleBasisCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Alternative Currency.
   * Maximum length: 3.
   */
  declare conditionAlternativeCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Amount In Local Crcy.
   */
  declare conditionAmountInLocalCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cndn Is Relevant For Intco Billing.
   */
  declare cndnIsRelevantForIntcoBilling: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Condition Is Manually Changed.
   */
  declare conditionIsManuallyChanged: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Billing Price Source.
   * Maximum length: 1.
   */
  declare billingPriceSource: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Jurisdiction Level.
   * Maximum length: 1.
   */
  declare taxJurisdictionLevel: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Byte Sequence.
   * Maximum length: 2.
   */
  declare conditionByteSequence: DeserializedType<T, 'Edm.Binary'>;
  /**
   * Cndn Is Relevant For Limit Value.
   */
  declare cndnIsRelevantForLimitValue: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Condition Basis Limit Exceeded.
   * Maximum length: 1.
   */
  declare conditionBasisLimitExceeded: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Amount Limit Exceeded.
   * Maximum length: 1.
   */
  declare conditionAmountLimitExceeded: DeserializedType<T, 'Edm.String'>;
  /**
   * Cumulated Condition Basis Value.
   */
  declare cumulatedConditionBasisValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Rebate Recipient.
   * Maximum length: 10.
   */
  declare customerRebateRecipient: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Is For Configuration.
   */
  declare conditionIsForConfiguration: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Variant Condition.
   * Maximum length: 26.
   */
  declare variantCondition: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Acct Assgmt Relevance.
   * Maximum length: 1.
   */
  declare conditionAcctAssgmtRelevance: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Matrix Maint Relevance.
   * Maximum length: 1.
   */
  declare conditionMatrixMaintRelevance: DeserializedType<T, 'Edm.String'>;
  /**
   * Configbl Parameters And Formulas.
   * @nullable
   */
  declare configblParametersAndFormulas?: DeserializedType<
    T,
    'Edm.Guid'
  > | null;
  /**
   * Condition Adjusted Quantity.
   */
  declare conditionAdjustedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Condition Type Name.
   * Maximum length: 30.
   */
  declare conditionTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Base Value Intl Unit.
   * Maximum length: 5.
   */
  declare conditionBaseValueIntlUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Base Value Unit.
   * Maximum length: 5.
   */
  declare conditionBaseValueUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Rate Value Intl Unit.
   * Maximum length: 5.
   */
  declare conditionRateValueIntlUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Rate Value Unit.
   * Maximum length: 5.
   */
  declare conditionRateValueUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Name.
   * Maximum length: 50.
   */
  declare taxCodeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Is Deletable.
   */
  declare conditionIsDeletable: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Pricing Procedure.
   * Maximum length: 6.
   */
  declare pricingProcedure: DeserializedType<T, 'Edm.String'>;
  /**
   * Superordinate Document.
   * Maximum length: 32.
   */
  declare superordinateDocument: DeserializedType<T, 'Edm.String'>;
  /**
   * Superordinate Document Item.
   * Maximum length: 70.
   */
  declare superordinateDocumentItem: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: PurOrderItemPricingElementApi<T>) {
    super(_entityApi);
  }
}

export interface PurOrderItemPricingElementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  purchaseOrderItem: DeserializedType<T, 'Edm.String'>;
  pricingDocument: DeserializedType<T, 'Edm.String'>;
  pricingDocumentItem: DeserializedType<T, 'Edm.String'>;
  pricingProcedureStep: DeserializedType<T, 'Edm.String'>;
  pricingProcedureCounter: DeserializedType<T, 'Edm.String'>;
  conditionApplication: DeserializedType<T, 'Edm.String'>;
  conditionType: DeserializedType<T, 'Edm.String'>;
  priceConditionDeterminationDte?: DeserializedType<T, 'Edm.Date'> | null;
  conditionCalculationType: DeserializedType<T, 'Edm.String'>;
  conditionBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  conditionBaseValue: DeserializedType<T, 'Edm.Decimal'>;
  conditionRateAmount: DeserializedType<T, 'Edm.Decimal'>;
  conditionRateRatio: DeserializedType<T, 'Edm.Decimal'>;
  conditionRateRatioUnit: DeserializedType<T, 'Edm.String'>;
  conditionCurrency: DeserializedType<T, 'Edm.String'>;
  priceDetnExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  conditionQuantity: DeserializedType<T, 'Edm.Decimal'>;
  conditionQuantityUnit: DeserializedType<T, 'Edm.String'>;
  conditionToBaseQtyNmrtr: DeserializedType<T, 'Edm.Decimal'>;
  conditionToBaseQtyDnmntr: DeserializedType<T, 'Edm.Decimal'>;
  conditionCategory: DeserializedType<T, 'Edm.String'>;
  conditionIsForStatistics: DeserializedType<T, 'Edm.Boolean'>;
  pricingScaleType: DeserializedType<T, 'Edm.String'>;
  isRelevantForAccrual: DeserializedType<T, 'Edm.Boolean'>;
  cndnIsRelevantForInvoiceList: DeserializedType<T, 'Edm.Boolean'>;
  conditionOrigin: DeserializedType<T, 'Edm.String'>;
  isGroupCondition: DeserializedType<T, 'Edm.Boolean'>;
  accessNumberOfAccessSequence: DeserializedType<T, 'Edm.String'>;
  conditionRecord: DeserializedType<T, 'Edm.String'>;
  conditionSequentialNumber: DeserializedType<T, 'Edm.String'>;
  accountKeyForGlAccount: DeserializedType<T, 'Edm.String'>;
  glAccount: DeserializedType<T, 'Edm.String'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  acctKeyForAccrualsGlAccount: DeserializedType<T, 'Edm.String'>;
  accrualsGlAccount: DeserializedType<T, 'Edm.String'>;
  withholdingTaxCode: DeserializedType<T, 'Edm.String'>;
  freightSupplier: DeserializedType<T, 'Edm.String'>;
  cndnRoundingOffDiffAmount: DeserializedType<T, 'Edm.Decimal'>;
  conditionAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrency: DeserializedType<T, 'Edm.String'>;
  conditionControl: DeserializedType<T, 'Edm.String'>;
  conditionInactiveReason: DeserializedType<T, 'Edm.String'>;
  conditionClass: DeserializedType<T, 'Edm.String'>;
  prcgProcedureCounterForHeader: DeserializedType<T, 'Edm.String'>;
  factorForConditionBasisValue: DeserializedType<T, 'Edm.Double'>;
  structureCondition: DeserializedType<T, 'Edm.String'>;
  periodFactorForCndnBasisValue: DeserializedType<T, 'Edm.Double'>;
  pricingScaleBasis: DeserializedType<T, 'Edm.String'>;
  conditionScaleBasisValue: DeserializedType<T, 'Edm.Decimal'>;
  conditionScaleBasisUnit: DeserializedType<T, 'Edm.String'>;
  conditionScaleBasisCurrency: DeserializedType<T, 'Edm.String'>;
  conditionAlternativeCurrency: DeserializedType<T, 'Edm.String'>;
  conditionAmountInLocalCrcy: DeserializedType<T, 'Edm.Decimal'>;
  cndnIsRelevantForIntcoBilling: DeserializedType<T, 'Edm.Boolean'>;
  conditionIsManuallyChanged: DeserializedType<T, 'Edm.Boolean'>;
  billingPriceSource: DeserializedType<T, 'Edm.String'>;
  taxJurisdictionLevel: DeserializedType<T, 'Edm.String'>;
  conditionByteSequence: DeserializedType<T, 'Edm.Binary'>;
  cndnIsRelevantForLimitValue: DeserializedType<T, 'Edm.Boolean'>;
  conditionBasisLimitExceeded: DeserializedType<T, 'Edm.String'>;
  conditionAmountLimitExceeded: DeserializedType<T, 'Edm.String'>;
  cumulatedConditionBasisValue: DeserializedType<T, 'Edm.Decimal'>;
  customerRebateRecipient: DeserializedType<T, 'Edm.String'>;
  conditionIsForConfiguration: DeserializedType<T, 'Edm.Boolean'>;
  variantCondition: DeserializedType<T, 'Edm.String'>;
  conditionAcctAssgmtRelevance: DeserializedType<T, 'Edm.String'>;
  conditionMatrixMaintRelevance: DeserializedType<T, 'Edm.String'>;
  configblParametersAndFormulas?: DeserializedType<T, 'Edm.Guid'> | null;
  conditionAdjustedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  conditionTypeName: DeserializedType<T, 'Edm.String'>;
  conditionBaseValueIntlUnit: DeserializedType<T, 'Edm.String'>;
  conditionBaseValueUnit: DeserializedType<T, 'Edm.String'>;
  conditionRateValueIntlUnit: DeserializedType<T, 'Edm.String'>;
  conditionRateValueUnit: DeserializedType<T, 'Edm.String'>;
  taxCodeName: DeserializedType<T, 'Edm.String'>;
  conditionIsDeletable: DeserializedType<T, 'Edm.Boolean'>;
  pricingProcedure: DeserializedType<T, 'Edm.String'>;
  superordinateDocument: DeserializedType<T, 'Edm.String'>;
  superordinateDocumentItem: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  purchaseOrder_1?: PurchaseOrderType<T> | null;
  purchaseOrderItem_1?: PurchaseOrderItemType<T> | null;
}
