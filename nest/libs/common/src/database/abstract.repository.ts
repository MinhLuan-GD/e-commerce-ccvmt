import { NotFoundException } from '@nestjs/common';
import {
  FilterQuery,
  Model,
  UpdateQuery,
  Connection,
  QueryOptions,
} from 'mongoose';
import { AbstractDocument } from './abstract.schema';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  constructor(
    protected readonly model: Model<TDocument>,
    private readonly connection: Connection,
  ) {}

  async create(document: Partial<TDocument>): Promise<TDocument> {
    return (await this.model.create(document)).toJSON() as unknown as TDocument;
  }

  async getDoc(filterQuery: FilterQuery<TDocument>) {
    const document = await this.model.find(filterQuery);
    if (!document) throw new NotFoundException('Document not found.');
    return document;
  }

  async findOne(filterQuery: FilterQuery<TDocument>, select?: string) {
    const document = await this.model
      .findOne(filterQuery)
      .select(select)
      .lean();
    return document;
  }

  async getOne(filterQuery: FilterQuery<TDocument>, select?: string) {
    const document = await this.model
      .findOne(filterQuery)
      .select(select)
      .lean();
    if (!document) throw new NotFoundException('Document not found.');
    return document;
  }

  async updateOne(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ) {
    const document = await this.model
      .findOneAndUpdate(filterQuery, update, {
        new: true,
      })
      .lean();
    if (!document) throw new NotFoundException('Document not found.');
    return document;
  }

  async upsert(
    filterQuery: FilterQuery<TDocument>,
    document: Partial<TDocument>,
    select?: string,
  ) {
    return this.model
      .findOneAndUpdate(filterQuery, document, {
        upsert: true,
        new: true,
      })
      .select(select)
      .lean();
  }

  async find(
    filterQuery: FilterQuery<TDocument>,
    select?: string,
    limit = 0,
    sort?: any,
  ) {
    return this.model
      .find(filterQuery)
      .select(select)
      .limit(limit)
      .sort(sort)
      .lean();
  }

  async sort(sortBy: any) {
    return this.model.find().sort(sortBy).lean();
  }

  async deleteOne(filterQuery: FilterQuery<TDocument>) {
    const document = await this.model.findOne(filterQuery);
    if (!document) throw new NotFoundException('Document not found.');
    await document.remove();
    return document;
  }

  async deleteMany(
    filterQuery: FilterQuery<TDocument>,
    options?: QueryOptions<TDocument>,
  ) {
    this.model.deleteMany(filterQuery, options, () => ({}));
  }

  async startTransaction() {
    const session = await this.connection.startSession();
    session.startTransaction();
    return session;
  }
}
