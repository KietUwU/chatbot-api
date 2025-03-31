/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  PoSubcontractingComponent,
  PurchaseOrder,
  PurchaseOrderAccountAssignment,
  PurchaseOrderInvoicingPlan,
  PurchaseOrderInvoicingPlanItem,
  PurchaseOrderItem,
  PurchaseOrderItemNote,
  PurchaseOrderNote,
  PurchaseOrderPartner,
  PurchaseOrderScheduleLine,
  PurchaseOrderSupplierAddress,
  PurOrderItemDeliveryAddress,
  PurOrderItemPricingElement
} from './index';

/**
 * Batch builder for operations supported on the Ce Purchaseorder 0001.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadCePurchaseorder0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadCePurchaseorder0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadCePurchaseorder0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadCePurchaseorder0001RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadCePurchaseorder0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultCePurchaseorder0001Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Ce Purchaseorder 0001.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteCePurchaseorder0001RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteCePurchaseorder0001RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteCePurchaseorder0001RequestBuilder<DeSerializersT>
    | Array<WriteCePurchaseorder0001RequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteCePurchaseorder0001RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultCePurchaseorder0001Path = '/';
export type ReadCePurchaseorder0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<PurchaseOrder<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      PurchaseOrderAccountAssignment<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<PurchaseOrderItem<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseOrderItemNote<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseOrderNote<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseOrderPartner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      PurchaseOrderSupplierAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      PurOrderItemDeliveryAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      PurOrderItemPricingElement<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PurchaseOrder<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      PurchaseOrderAccountAssignment<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PurchaseOrderItem<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      PurchaseOrderItemNote<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PurchaseOrderNote<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PurchaseOrderPartner<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      PurchaseOrderSupplierAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      PurOrderItemDeliveryAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      PurOrderItemPricingElement<DeSerializersT>,
      DeSerializersT
    >;
export type WriteCePurchaseorder0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PoSubcontractingComponent<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<PurchaseOrder<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseOrder<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseOrder<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      PurchaseOrderAccountAssignment<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PurchaseOrderAccountAssignment<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PurchaseOrderAccountAssignment<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PurchaseOrderInvoicingPlan<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PurchaseOrderInvoicingPlanItem<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<PurchaseOrderItem<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseOrderItem<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseOrderItem<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseOrderItemNote<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseOrderItemNote<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseOrderItemNote<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseOrderNote<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseOrderNote<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseOrderNote<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseOrderPartner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseOrderPartner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseOrderPartner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PurchaseOrderScheduleLine<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      PurchaseOrderSupplierAddress<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PurchaseOrderSupplierAddress<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PurchaseOrderSupplierAddress<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      PurOrderItemDeliveryAddress<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PurOrderItemDeliveryAddress<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PurOrderItemDeliveryAddress<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      PurOrderItemPricingElement<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PurOrderItemPricingElement<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PurOrderItemPricingElement<DeSerializersT>,
      DeSerializersT
    >;
