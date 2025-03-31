/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PoSubcontractingComponentApi } from './PoSubcontractingComponentApi';
import { PurchaseOrderApi } from './PurchaseOrderApi';
import { PurchaseOrderAccountAssignmentApi } from './PurchaseOrderAccountAssignmentApi';
import { PurchaseOrderInvoicingPlanApi } from './PurchaseOrderInvoicingPlanApi';
import { PurchaseOrderInvoicingPlanItemApi } from './PurchaseOrderInvoicingPlanItemApi';
import { PurchaseOrderItemApi } from './PurchaseOrderItemApi';
import { PurchaseOrderItemNoteApi } from './PurchaseOrderItemNoteApi';
import { PurchaseOrderNoteApi } from './PurchaseOrderNoteApi';
import { PurchaseOrderPartnerApi } from './PurchaseOrderPartnerApi';
import { PurchaseOrderScheduleLineApi } from './PurchaseOrderScheduleLineApi';
import { PurchaseOrderSupplierAddressApi } from './PurchaseOrderSupplierAddressApi';
import { PurOrderItemDeliveryAddressApi } from './PurOrderItemDeliveryAddressApi';
import { PurOrderItemPricingElementApi } from './PurOrderItemPricingElementApi';
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';

export function cePurchaseorder0001<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateT = Moment,
  DurationT = Duration,
  TimeOfDayT = Time,
  EnumT = any
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateT,
      DurationT,
      TimeOfDayT,
      EnumT
    >
  > = defaultDeSerializers as any
): CePurchaseorder0001<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateT,
    DurationT,
    TimeOfDayT,
    EnumT
  >
> {
  return new CePurchaseorder0001(mergeDefaultDeSerializersWith(deSerializers));
}
class CePurchaseorder0001<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get poSubcontractingComponentApi(): PoSubcontractingComponentApi<DeSerializersT> {
    const api = this.initApi(
      'poSubcontractingComponentApi',
      PoSubcontractingComponentApi
    );
    const linkedApis = [
      this.initApi('purchaseOrderApi', PurchaseOrderApi),
      this.initApi('purchaseOrderItemApi', PurchaseOrderItemApi),
      this.initApi('purchaseOrderScheduleLineApi', PurchaseOrderScheduleLineApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purchaseOrderApi(): PurchaseOrderApi<DeSerializersT> {
    const api = this.initApi('purchaseOrderApi', PurchaseOrderApi);
    const linkedApis = [
      this.initApi('purchaseOrderItemApi', PurchaseOrderItemApi),
      this.initApi('purchaseOrderNoteApi', PurchaseOrderNoteApi),
      this.initApi('purchaseOrderPartnerApi', PurchaseOrderPartnerApi),
      this.initApi(
        'purchaseOrderSupplierAddressApi',
        PurchaseOrderSupplierAddressApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purchaseOrderAccountAssignmentApi(): PurchaseOrderAccountAssignmentApi<DeSerializersT> {
    const api = this.initApi(
      'purchaseOrderAccountAssignmentApi',
      PurchaseOrderAccountAssignmentApi
    );
    const linkedApis = [
      this.initApi('purchaseOrderApi', PurchaseOrderApi),
      this.initApi('purchaseOrderItemApi', PurchaseOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purchaseOrderInvoicingPlanApi(): PurchaseOrderInvoicingPlanApi<DeSerializersT> {
    const api = this.initApi(
      'purchaseOrderInvoicingPlanApi',
      PurchaseOrderInvoicingPlanApi
    );
    const linkedApis = [
      this.initApi(
        'purchaseOrderInvoicingPlanItemApi',
        PurchaseOrderInvoicingPlanItemApi
      ),
      this.initApi('purchaseOrderApi', PurchaseOrderApi),
      this.initApi('purchaseOrderItemApi', PurchaseOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purchaseOrderInvoicingPlanItemApi(): PurchaseOrderInvoicingPlanItemApi<DeSerializersT> {
    const api = this.initApi(
      'purchaseOrderInvoicingPlanItemApi',
      PurchaseOrderInvoicingPlanItemApi
    );
    const linkedApis = [
      this.initApi('purchaseOrderApi', PurchaseOrderApi),
      this.initApi(
        'purchaseOrderInvoicingPlanApi',
        PurchaseOrderInvoicingPlanApi
      ),
      this.initApi('purchaseOrderItemApi', PurchaseOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purchaseOrderItemApi(): PurchaseOrderItemApi<DeSerializersT> {
    const api = this.initApi('purchaseOrderItemApi', PurchaseOrderItemApi);
    const linkedApis = [
      this.initApi(
        'purOrderItemDeliveryAddressApi',
        PurOrderItemDeliveryAddressApi
      ),
      this.initApi('purchaseOrderApi', PurchaseOrderApi),
      this.initApi(
        'purchaseOrderInvoicingPlanApi',
        PurchaseOrderInvoicingPlanApi
      ),
      this.initApi('purchaseOrderItemNoteApi', PurchaseOrderItemNoteApi),
      this.initApi(
        'purchaseOrderScheduleLineApi',
        PurchaseOrderScheduleLineApi
      ),
      this.initApi(
        'purchaseOrderAccountAssignmentApi',
        PurchaseOrderAccountAssignmentApi
      ),
      this.initApi(
        'purOrderItemPricingElementApi',
        PurOrderItemPricingElementApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purchaseOrderItemNoteApi(): PurchaseOrderItemNoteApi<DeSerializersT> {
    const api = this.initApi(
      'purchaseOrderItemNoteApi',
      PurchaseOrderItemNoteApi
    );
    const linkedApis = [
      this.initApi('purchaseOrderApi', PurchaseOrderApi),
      this.initApi('purchaseOrderItemApi', PurchaseOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purchaseOrderNoteApi(): PurchaseOrderNoteApi<DeSerializersT> {
    const api = this.initApi('purchaseOrderNoteApi', PurchaseOrderNoteApi);
    const linkedApis = [this.initApi('purchaseOrderApi', PurchaseOrderApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purchaseOrderPartnerApi(): PurchaseOrderPartnerApi<DeSerializersT> {
    const api = this.initApi(
      'purchaseOrderPartnerApi',
      PurchaseOrderPartnerApi
    );
    const linkedApis = [this.initApi('purchaseOrderApi', PurchaseOrderApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purchaseOrderScheduleLineApi(): PurchaseOrderScheduleLineApi<DeSerializersT> {
    const api = this.initApi(
      'purchaseOrderScheduleLineApi',
      PurchaseOrderScheduleLineApi
    );
    const linkedApis = [
      this.initApi('purchaseOrderApi', PurchaseOrderApi),
      this.initApi('purchaseOrderItemApi', PurchaseOrderItemApi),
      this.initApi('poSubcontractingComponentApi', PoSubcontractingComponentApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purchaseOrderSupplierAddressApi(): PurchaseOrderSupplierAddressApi<DeSerializersT> {
    const api = this.initApi(
      'purchaseOrderSupplierAddressApi',
      PurchaseOrderSupplierAddressApi
    );
    const linkedApis = [this.initApi('purchaseOrderApi', PurchaseOrderApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purOrderItemDeliveryAddressApi(): PurOrderItemDeliveryAddressApi<DeSerializersT> {
    const api = this.initApi(
      'purOrderItemDeliveryAddressApi',
      PurOrderItemDeliveryAddressApi
    );
    const linkedApis = [
      this.initApi('purchaseOrderApi', PurchaseOrderApi),
      this.initApi('purchaseOrderItemApi', PurchaseOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get purOrderItemPricingElementApi(): PurOrderItemPricingElementApi<DeSerializersT> {
    const api = this.initApi(
      'purOrderItemPricingElementApi',
      PurOrderItemPricingElementApi
    );
    const linkedApis = [
      this.initApi('purchaseOrderApi', PurchaseOrderApi),
      this.initApi('purchaseOrderItemApi', PurchaseOrderItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
