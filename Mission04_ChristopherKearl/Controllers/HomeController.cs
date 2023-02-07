using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_ChristopherKearl.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GradeCalculator(string message)
        {
            return View();
        }

        [HttpPost]
        public ViewResult CalculateGrate(string message)
        {

            return View(GradeCalculator(message));
        }
    }
}
