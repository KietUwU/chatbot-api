/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { PurchaseOrderInvoicingPlanItem } from './PurchaseOrderInvoicingPlanItem';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderInvoicingPlanItem} entity.
 */
export class PurchaseOrderInvoicingPlanItemRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderInvoicingPlanItem` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderInvoicingPlanItem` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderInvoicingPlanItem` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderInvoicingPlanItem`.
   */
  create(
    entity: PurchaseOrderInvoicingPlanItem<T>
  ): CreateRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderInvoicingPlanItem` entity based on its keys.
   * @param purchaseOrder Key property. See {@link PurchaseOrderInvoicingPlanItem.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurchaseOrderInvoicingPlanItem.purchaseOrderItem}.
   * @param invoicingPlanItem Key property. See {@link PurchaseOrderInvoicingPlanItem.invoicingPlanItem}.
   * @param invoicingPlan Key property. See {@link PurchaseOrderInvoicingPlanItem.invoicingPlan}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderInvoicingPlanItem` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    purchaseOrderItem: DeserializedType<T, 'Edm.String'>,
    invoicingPlanItem: DeserializedType<T, 'Edm.String'>,
    invoicingPlan: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T>(
      this.entityApi,
      {
        PurchaseOrder: purchaseOrder,
        PurchaseOrderItem: purchaseOrderItem,
        InvoicingPlanItem: invoicingPlanItem,
        InvoicingPlan: invoicingPlan
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderInvoicingPlanItem`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderInvoicingPlanItem`.
   */
  update(
    entity: PurchaseOrderInvoicingPlanItem<T>
  ): UpdateRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderInvoicingPlanItem`.
   * @param purchaseOrder Key property. See {@link PurchaseOrderInvoicingPlanItem.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurchaseOrderInvoicingPlanItem.purchaseOrderItem}.
   * @param invoicingPlanItem Key property. See {@link PurchaseOrderInvoicingPlanItem.invoicingPlanItem}.
   * @param invoicingPlan Key property. See {@link PurchaseOrderInvoicingPlanItem.invoicingPlan}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderInvoicingPlanItem`.
   */
  delete(
    purchaseOrder: string,
    purchaseOrderItem: string,
    invoicingPlanItem: string,
    invoicingPlan: string
  ): DeleteRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderInvoicingPlanItem`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderInvoicingPlanItem` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderInvoicingPlanItem<T>
  ): DeleteRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T>;
  delete(
    purchaseOrderOrEntity: any,
    purchaseOrderItem?: string,
    invoicingPlanItem?: string,
    invoicingPlan?: string
  ): DeleteRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderInvoicingPlanItem<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof PurchaseOrderInvoicingPlanItem
        ? purchaseOrderOrEntity
        : {
            PurchaseOrder: purchaseOrderOrEntity!,
            PurchaseOrderItem: purchaseOrderItem!,
            InvoicingPlanItem: invoicingPlanItem!,
            InvoicingPlan: invoicingPlan!
          }
    );
  }
}
