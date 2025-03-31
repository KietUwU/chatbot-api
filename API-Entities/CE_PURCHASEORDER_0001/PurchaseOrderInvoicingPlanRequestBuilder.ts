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
import { PurchaseOrderInvoicingPlan } from './PurchaseOrderInvoicingPlan';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderInvoicingPlan} entity.
 */
export class PurchaseOrderInvoicingPlanRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderInvoicingPlan<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderInvoicingPlan` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderInvoicingPlan` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderInvoicingPlan<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderInvoicingPlan<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderInvoicingPlan` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderInvoicingPlan`.
   */
  create(
    entity: PurchaseOrderInvoicingPlan<T>
  ): CreateRequestBuilder<PurchaseOrderInvoicingPlan<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderInvoicingPlan<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderInvoicingPlan` entity based on its keys.
   * @param purchaseOrder Key property. See {@link PurchaseOrderInvoicingPlan.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurchaseOrderInvoicingPlan.purchaseOrderItem}.
   * @param invoicingPlan Key property. See {@link PurchaseOrderInvoicingPlan.invoicingPlan}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderInvoicingPlan` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    purchaseOrderItem: DeserializedType<T, 'Edm.String'>,
    invoicingPlan: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderInvoicingPlan<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderInvoicingPlan<T>, T>(
      this.entityApi,
      {
        PurchaseOrder: purchaseOrder,
        PurchaseOrderItem: purchaseOrderItem,
        InvoicingPlan: invoicingPlan
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderInvoicingPlan`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderInvoicingPlan`.
   */
  update(
    entity: PurchaseOrderInvoicingPlan<T>
  ): UpdateRequestBuilder<PurchaseOrderInvoicingPlan<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderInvoicingPlan<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderInvoicingPlan`.
   * @param purchaseOrder Key property. See {@link PurchaseOrderInvoicingPlan.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurchaseOrderInvoicingPlan.purchaseOrderItem}.
   * @param invoicingPlan Key property. See {@link PurchaseOrderInvoicingPlan.invoicingPlan}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderInvoicingPlan`.
   */
  delete(
    purchaseOrder: string,
    purchaseOrderItem: string,
    invoicingPlan: string
  ): DeleteRequestBuilder<PurchaseOrderInvoicingPlan<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderInvoicingPlan`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderInvoicingPlan` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderInvoicingPlan<T>
  ): DeleteRequestBuilder<PurchaseOrderInvoicingPlan<T>, T>;
  delete(
    purchaseOrderOrEntity: any,
    purchaseOrderItem?: string,
    invoicingPlan?: string
  ): DeleteRequestBuilder<PurchaseOrderInvoicingPlan<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderInvoicingPlan<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof PurchaseOrderInvoicingPlan
        ? purchaseOrderOrEntity
        : {
            PurchaseOrder: purchaseOrderOrEntity!,
            PurchaseOrderItem: purchaseOrderItem!,
            InvoicingPlan: invoicingPlan!
          }
    );
  }
}
