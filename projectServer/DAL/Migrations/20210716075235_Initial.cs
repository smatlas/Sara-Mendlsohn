using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Person",
                columns: table => new
                {
                    personID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    ID = table.Column<string>(type: "nvarchar(9)", nullable: false),
                    birthDate = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    kind = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HMO = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Person", x => x.personID);
                });

            migrationBuilder.CreateTable(
                name: "Children",
                columns: table => new
                {
                    childID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID = table.Column<string>(type: "nvarchar(9)", nullable: true),
                    name = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    birthDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    personID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Children", x => x.childID);
                    table.ForeignKey(
                        name: "FK_Children_Person_personID",
                        column: x => x.personID,
                        principalTable: "Person",
                        principalColumn: "personID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Children_personID",
                table: "Children",
                column: "personID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Children");

            migrationBuilder.DropTable(
                name: "Person");
        }
    }
}
