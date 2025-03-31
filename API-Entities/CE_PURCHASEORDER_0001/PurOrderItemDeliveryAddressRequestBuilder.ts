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
import { PurOrderItemDeliveryAddress } from './PurOrderItemDeliveryAddress';

/**
 * Request builder class for operations supported on the {@link PurOrderItemDeliveryAddress} entity.
 */
export class PurOrderItemDeliveryAddressRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurOrderItemDeliveryAddress<T>, T> {
  /**
   * Returns a request builder for querying all `PurOrderItemDeliveryAddress` entities.
   * @returns A request builder for creating requests to retrieve all `PurOrderItemDeliveryAddress` entities.
   */
  getAll(): GetAllRequestBuilder<PurOrderItemDeliveryAddress<T>, T> {
    return new GetAllRequestBuilder<PurOrderItemDeliveryAddress<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurOrderItemDeliveryAddress` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurOrderItemDeliveryAddress`.
   */
  create(
    entity: PurOrderItemDeliveryAddress<T>
  ): CreateRequestBuilder<PurOrderItemDeliveryAddress<T>, T> {
    return new CreateRequestBuilder<PurOrderItemDeliveryAddress<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurOrderItemDeliveryAddress` entity based on its keys.
   * @param purchaseOrder Key property. See {@link PurOrderItemDeliveryAddress.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurOrderItemDeliveryAddress.purchaseOrderItem}.
   * @param deliveryAddressId Key property. See {@link PurOrderItemDeliveryAddress.deliveryAddressId}.
   * @returns A request builder for creating requests to retrieve one `PurOrderItemDeliveryAddress` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    purchaseOrderItem: DeserializedType<T, 'Edm.String'>,
    deliveryAddressId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurOrderItemDeliveryAddress<T>, T> {
    return new GetByKeyRequestBuilder<PurOrderItemDeliveryAddress<T>, T>(
      this.entityApi,
      {
        PurchaseOrder: purchaseOrder,
        PurchaseOrderItem: purchaseOrderItem,
        DeliveryAddressID: deliveryAddressId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurOrderItemDeliveryAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurOrderItemDeliveryAddress`.
   */
  update(
    entity: PurOrderItemDeliveryAddress<T>
  ): UpdateRequestBuilder<PurOrderItemDeliveryAddress<T>, T> {
    return new UpdateRequestBuilder<PurOrderItemDeliveryAddress<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurOrderItemDeliveryAddress`.
   * @param purchaseOrder Key property. See {@link PurOrderItemDeliveryAddress.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurOrderItemDeliveryAddress.purchaseOrderItem}.
   * @param deliveryAddressId Key property. See {@link PurOrderItemDeliveryAddress.deliveryAddressId}.
   * @returns A request builder for creating requests that delete an entity of type `PurOrderItemDeliveryAddress`.
   */
  delete(
    purchaseOrder: string,
    purchaseOrderItem: string,
    deliveryAddressId: string
  ): DeleteRequestBuilder<PurOrderItemDeliveryAddress<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurOrderItemDeliveryAddress`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurOrderItemDeliveryAddress` by taking the entity as a parameter.
   */
  delete(
    entity: PurOrderItemDeliveryAddress<T>
  ): DeleteRequestBuilder<PurOrderItemDeliveryAddress<T>, T>;
  delete(
    purchaseOrderOrEntity: any,
    purchaseOrderItem?: string,
    deliveryAddressId?: string
  ): DeleteRequestBuilder<PurOrderItemDeliveryAddress<T>, T> {
    return new DeleteRequestBuilder<PurOrderItemDeliveryAddress<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof PurOrderItemDeliveryAddress
        ? purchaseOrderOrEntity
        : {
            PurchaseOrder: purchaseOrderOrEntity!,
            PurchaseOrderItem: purchaseOrderItem!,
            DeliveryAddressID: deliveryAddressId!
          }
    );
  }
}
