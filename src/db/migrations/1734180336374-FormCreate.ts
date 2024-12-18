import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class FormCreate1734180336374 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const checkFormTable = await queryRunner.hasTable("form");
    if (!checkFormTable) {
      await queryRunner.createTable(
        new Table({
          name: "form",
          columns: [
            {
              name: "id",
              type: "int",
              isPrimary: true,
              isGenerated: true,
              generationStrategy: "increment",
            },
            {
              name: "first_name",
              type: "varchar",
              isNullable: true,
            },
            {
              name: "last_name",
              type: "varchar",
              isNullable: true,
            },
            {
              name: "email",
              type: "varchar",
              isNullable: false,
            },
            {
              name: "phone",
              type: "bigint",
              isNullable: true,
            },
            {
              name: "address",
              type: "varchar",
              isNullable: true,
            },
            {
              name: "created_at",
              type: "timestamptz",
              default: "CURRENT_TIMESTAMP",
              onUpdate: "CURRENT_TIMESTAMP",
              isNullable: false,
            },
            {
              name: "updated_at",
              type: "timestamptz",
              default: "CURRENT_TIMESTAMP",
              isNullable: false,
            },
          ],
        })
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
