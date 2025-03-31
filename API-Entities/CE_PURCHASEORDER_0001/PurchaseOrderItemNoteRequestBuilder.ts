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
import { PurchaseOrderItemNote } from './PurchaseOrderItemNote';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderItemNote} entity.
 */
export class PurchaseOrderItemNoteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderItemNote<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderItemNote` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderItemNote` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderItemNote<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderItemNote<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderItemNote` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderItemNote`.
   */
  create(
    entity: PurchaseOrderItemNote<T>
  ): CreateRequestBuilder<PurchaseOrderItemNote<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderItemNote<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderItemNote` entity based on its keys.
   * @param purchaseOrder Key property. See {@link PurchaseOrderItemNote.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurchaseOrderItemNote.purchaseOrderItem}.
   * @param textObjectType Key property. See {@link PurchaseOrderItemNote.textObjectType}.
   * @param language Key property. See {@link PurchaseOrderItemNote.language}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderItemNote` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    purchaseOrderItem: DeserializedType<T, 'Edm.String'>,
    textObjectType: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderItemNote<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderItemNote<T>, T>(
      this.entityApi,
      {
        PurchaseOrder: purchaseOrder,
        PurchaseOrderItem: purchaseOrderItem,
        TextObjectType: textObjectType,
        Language: language
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderItemNote`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderItemNote`.
   */
  update(
    entity: PurchaseOrderItemNote<T>
  ): UpdateRequestBuilder<PurchaseOrderItemNote<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderItemNote<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderItemNote`.
   * @param purchaseOrder Key property. See {@link PurchaseOrderItemNote.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link PurchaseOrderItemNote.purchaseOrderItem}.
   * @param textObjectType Key property. See {@link PurchaseOrderItemNote.textObjectType}.
   * @param language Key property. See {@link PurchaseOrderItemNote.language}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderItemNote`.
   */
  delete(
    purchaseOrder: string,
    purchaseOrderItem: string,
    textObjectType: string,
    language: string
  ): DeleteRequestBuilder<PurchaseOrderItemNote<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderItemNote`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderItemNote` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderItemNote<T>
  ): DeleteRequestBuilder<PurchaseOrderItemNote<T>, T>;
  delete(
    purchaseOrderOrEntity: any,
    purchaseOrderItem?: string,
    textObjectType?: string,
    language?: string
  ): DeleteRequestBuilder<PurchaseOrderItemNote<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderItemNote<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof PurchaseOrderItemNote
        ? purchaseOrderOrEntity
        : {
            PurchaseOrder: purchaseOrderOrEntity!,
            PurchaseOrderItem: purchaseOrderItem!,
            TextObjectType: textObjectType!,
            Language: language!
          }
    );
  }
}
