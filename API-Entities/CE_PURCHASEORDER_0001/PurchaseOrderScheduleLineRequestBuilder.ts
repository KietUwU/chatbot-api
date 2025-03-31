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
import { PurchaseOrderScheduleLine } from './PurchaseOrderScheduleLine';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderScheduleLine} entity.
 */
export class PurchaseOrderScheduleLineRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderScheduleLine<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderScheduleLine` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderScheduleLine` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderScheduleLine<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderScheduleLine<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderScheduleLine` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderScheduleLine`.
   */
  create(
    entity: PurchaseOrderScheduleLine<T>
  ): CreateRequestBuilder<PurchaseOrderScheduleLine<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderScheduleLine<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderScheduleLine` entity based on its keys.
   * @param purchaseOrder Key property. See {@link PurchaseOrderScheduleLine.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurchaseOrderScheduleLine.purchaseOrderItem}.
   * @param scheduleLine Key property. See {@link PurchaseOrderScheduleLine.scheduleLine}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderScheduleLine` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    purchaseOrderItem: DeserializedType<T, 'Edm.String'>,
    scheduleLine: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderScheduleLine<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderScheduleLine<T>, T>(
      this.entityApi,
      {
        PurchaseOrder: purchaseOrder,
        PurchaseOrderItem: purchaseOrderItem,
        ScheduleLine: scheduleLine
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderScheduleLine`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderScheduleLine`.
   */
  update(
    entity: PurchaseOrderScheduleLine<T>
  ): UpdateRequestBuilder<PurchaseOrderScheduleLine<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderScheduleLine<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderScheduleLine`.
   * @param purchaseOrder Key property. See {@link PurchaseOrderScheduleLine.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurchaseOrderScheduleLine.purchaseOrderItem}.
   * @param scheduleLine Key property. See {@link PurchaseOrderScheduleLine.scheduleLine}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderScheduleLine`.
   */
  delete(
    purchaseOrder: string,
    purchaseOrderItem: string,
    scheduleLine: string
  ): DeleteRequestBuilder<PurchaseOrderScheduleLine<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderScheduleLine`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderScheduleLine` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderScheduleLine<T>
  ): DeleteRequestBuilder<PurchaseOrderScheduleLine<T>, T>;
  delete(
    purchaseOrderOrEntity: any,
    purchaseOrderItem?: string,
    scheduleLine?: string
  ): DeleteRequestBuilder<PurchaseOrderScheduleLine<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderScheduleLine<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof PurchaseOrderScheduleLine
        ? purchaseOrderOrEntity
        : {
            PurchaseOrder: purchaseOrderOrEntity!,
            PurchaseOrderItem: purchaseOrderItem!,
            ScheduleLine: scheduleLine!
          }
    );
  }
}
