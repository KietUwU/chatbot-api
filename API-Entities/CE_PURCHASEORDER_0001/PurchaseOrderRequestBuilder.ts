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
import { PurchaseOrder } from './PurchaseOrder';

/**
 * Request builder class for operations supported on the {@link PurchaseOrder} entity.
 */
export class PurchaseOrderRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrder<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrder` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrder` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrder<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrder<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseOrder` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrder`.
   */
  create(entity: PurchaseOrder<T>): CreateRequestBuilder<PurchaseOrder<T>, T> {
    return new CreateRequestBuilder<PurchaseOrder<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrder` entity based on its keys.
   * @param purchaseOrder Key property. See {@link PurchaseOrder.purchaseOrder}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrder` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrder<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrder<T>, T>(this.entityApi, {
      PurchaseOrder: purchaseOrder
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrder`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrder`.
   */
  update(entity: PurchaseOrder<T>): UpdateRequestBuilder<PurchaseOrder<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrder<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrder`.
   * @param purchaseOrder Key property. See {@link PurchaseOrder.purchaseOrder}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrder`.
   */
  delete(purchaseOrder: string): DeleteRequestBuilder<PurchaseOrder<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrder`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrder` by taking the entity as a parameter.
   */
  delete(entity: PurchaseOrder<T>): DeleteRequestBuilder<PurchaseOrder<T>, T>;
  delete(
    purchaseOrderOrEntity: any
  ): DeleteRequestBuilder<PurchaseOrder<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrder<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof PurchaseOrder
        ? purchaseOrderOrEntity
        : { PurchaseOrder: purchaseOrderOrEntity! }
    );
  }
}
