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
import { PurchaseOrderAccountAssignment } from './PurchaseOrderAccountAssignment';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderAccountAssignment} entity.
 */
export class PurchaseOrderAccountAssignmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderAccountAssignment<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderAccountAssignment` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderAccountAssignment` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderAccountAssignment<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderAccountAssignment<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderAccountAssignment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderAccountAssignment`.
   */
  create(
    entity: PurchaseOrderAccountAssignment<T>
  ): CreateRequestBuilder<PurchaseOrderAccountAssignment<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderAccountAssignment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderAccountAssignment` entity based on its keys.
   * @param purchaseOrder Key property. See {@link PurchaseOrderAccountAssignment.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurchaseOrderAccountAssignment.purchaseOrderItem}.
   * @param accountAssignmentNumber Key property. See {@link PurchaseOrderAccountAssignment.accountAssignmentNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderAccountAssignment` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    purchaseOrderItem: DeserializedType<T, 'Edm.String'>,
    accountAssignmentNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderAccountAssignment<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderAccountAssignment<T>, T>(
      this.entityApi,
      {
        PurchaseOrder: purchaseOrder,
        PurchaseOrderItem: purchaseOrderItem,
        AccountAssignmentNumber: accountAssignmentNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderAccountAssignment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderAccountAssignment`.
   */
  update(
    entity: PurchaseOrderAccountAssignment<T>
  ): UpdateRequestBuilder<PurchaseOrderAccountAssignment<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderAccountAssignment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderAccountAssignment`.
   * @param purchaseOrder Key property. See {@link PurchaseOrderAccountAssignment.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurchaseOrderAccountAssignment.purchaseOrderItem}.
   * @param accountAssignmentNumber Key property. See {@link PurchaseOrderAccountAssignment.accountAssignmentNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderAccountAssignment`.
   */
  delete(
    purchaseOrder: string,
    purchaseOrderItem: string,
    accountAssignmentNumber: string
  ): DeleteRequestBuilder<PurchaseOrderAccountAssignment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderAccountAssignment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderAccountAssignment` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderAccountAssignment<T>
  ): DeleteRequestBuilder<PurchaseOrderAccountAssignment<T>, T>;
  delete(
    purchaseOrderOrEntity: any,
    purchaseOrderItem?: string,
    accountAssignmentNumber?: string
  ): DeleteRequestBuilder<PurchaseOrderAccountAssignment<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderAccountAssignment<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof PurchaseOrderAccountAssignment
        ? purchaseOrderOrEntity
        : {
            PurchaseOrder: purchaseOrderOrEntity!,
            PurchaseOrderItem: purchaseOrderItem!,
            AccountAssignmentNumber: accountAssignmentNumber!
          }
    );
  }
}
