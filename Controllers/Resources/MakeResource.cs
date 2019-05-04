using System.Collections.Generic;

namespace vega.Controllers.Resources
{
    public class MakeResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<ModelResource> Models { get; set; }

        public MakeResource()
        {
            Models = new List<ModelResource>();
        }
    }
}