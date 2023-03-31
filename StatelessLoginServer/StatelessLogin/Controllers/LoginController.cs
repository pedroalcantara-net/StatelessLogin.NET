using Microsoft.AspNetCore.Mvc;
using StatelessLogin.Models;

namespace StatelessLogin.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<string>> Login(LoginViewModel login)
        {
            if (login.Username == "admin" && login.Password == "admin")
            {
                return Ok(new { Token = "d2089be672953d1136faa84079af1b6f3967fed8932dabffba3032d30e3c0618" });
            }
            else
            {
                return StatusCode(StatusCodes.Status401Unauthorized, "Usuário ou senha incorretos.");
            }
        }

        [HttpGet]
        public async Task<ActionResult<string>> Get(string? token)
        {
            if (token == "d2089be672953d1136faa84079af1b6f3967fed8932dabffba3032d30e3c0618")
            {
                return Ok(new { Mensagem = "Seja bem vindo, Admin" });
            }
            else
            {
                return StatusCode(StatusCodes.Status401Unauthorized, "Não autorizado, realize o Login.");
            }
        }
    }
}
