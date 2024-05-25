docker build --no-cache -f SQL\Dockerfile.PostgreSql -t crmj/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t crmj/app ../..
