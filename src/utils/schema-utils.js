const { Validator } = require("jsonschema");

class SchemaUtils {

    static validate(schemaContentAsJson, yamlContentAsJson) {

        if (!schemaContentAsJson) {
            throw new Error("schemaContentAsJson is required");
        }

        if (!yamlContentAsJson) {
            throw new Error("yamlContentAsJson is required");
        }

        return new Validator().validate(yamlContentAsJson, schemaContentAsJson);
    }
}

module.exports = SchemaUtils;

// export default SchemaUtils;
