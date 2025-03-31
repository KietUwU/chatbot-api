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
import { PurchaseOrderSupplierAddress } from './PurchaseOrderSupplierAddress';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderSupplierAddress} entity.
 */
export class PurchaseOrderSupplierAddressRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderSupplierAddress<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderSupplierAddress` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderSupplierAddress` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderSupplierAddress<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderSupplierAddress<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderSupplierAddress` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderSupplierAddress`.
   */
  create(
    entity: PurchaseOrderSupplierAddress<T>
  ): CreateRequestBuilder<PurchaseOrderSupplierAddress<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderSupplierAddress<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderSupplierAddress` entity based on its keys.
   * @param supplierAddressId Key property. See {@link PurchaseOrderSupplierAddress.supplierAddressId}.
   * @param purchaseOrder Key property. See {@link PurchaseOrderSupplierAddress.purchaseOrder}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderSupplierAddress` entity based on its keys.
   */
  getByKey(
    supplierAddressId: DeserializedType<T, 'Edm.String'>,
    purchaseOrder: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderSupplierAddress<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderSupplierAddress<T>, T>(
      this.entityApi,
      {
        SupplierAddressID: supplierAddressId,
        PurchaseOrder: purchaseOrder
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderSupplierAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderSupplierAddress`.
   */
  update(
    entity: PurchaseOrderSupplierAddress<T>
  ): UpdateRequestBuilder<PurchaseOrderSupplierAddress<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderSupplierAddress<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderSupplierAddress`.
   * @param supplierAddressId Key property. See {@link PurchaseOrderSupplierAddress.supplierAddressId}.
   * @param purchaseOrder Key property. See {@link PurchaseOrderSupplierAddress.purchaseOrder}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderSupplierAddress`.
   */
  delete(
    supplierAddressId: string,
    purchaseOrder: string
  ): DeleteRequestBuilder<PurchaseOrderSupplierAddress<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderSupplierAddress`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderSupplierAddress` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderSupplierAddress<T>
  ): DeleteRequestBuilder<PurchaseOrderSupplierAddress<T>, T>;
  delete(
    supplierAddressIdOrEntity: any,
    purchaseOrder?: string
  ): DeleteRequestBuilder<PurchaseOrderSupplierAddress<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderSupplierAddress<T>, T>(
      this.entityApi,
      supplierAddressIdOrEntity instanceof PurchaseOrderSupplierAddress
        ? supplierAddressIdOrEntity
        : {
            SupplierAddressID: supplierAddressIdOrEntity!,
            PurchaseOrder: purchaseOrder!
          }
    );
  }
}
